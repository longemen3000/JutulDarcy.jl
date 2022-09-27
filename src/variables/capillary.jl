
struct SimpleCapillaryPressure{T, R} <: GroupedVariables
    pc::T
    regions::R
    function SimpleCapillaryPressure(pc::C; regions::T = nothing) where {C, T}
        is_tup_tup = first(pc) isa Tuple
        if isnothing(regions)
            @assert !is_tup_tup
        end
        pc = map(x -> region_wrap(x, regions), pc)
        pc = tuple(pc...)
        return new{typeof(pc), T}(pc)
    end
end

degrees_of_freedom_per_entity(model, v::SimpleCapillaryPressure) = number_of_phases(model.system) - 1

@jutul_secondary function update_as_secondary!(Δp, pc::SimpleCapillaryPressure, model, Saturations)
    cap = pc.pc
    npc, nc = size(Δp)
    if npc == 1
        pcow = cap[1]
        @inbounds for c in 1:nc
            reg = region(pc.regions, c)
            pcow_c = table_by_region(pcow, reg)
            sw = Saturations[1, c]
            Δp[1, c] = pcow(sw)
        end
    elseif npc == 2
        pcow, pcog = cap
        if isnothing(pcow)
            @inbounds for c in 1:nc
                reg = region(pc.regions, c)
                pcog_c = table_by_region(pcog, reg)
                sg = Saturations[3, c]
                Δp[1, c] = 0
                Δp[2, c] = pcog_c(sg)
            end
        elseif isnothing(pcog)
            @inbounds for c in 1:nc
                reg = region(pc.regions, c)
                pcow_c = table_by_region(pcow, reg)
                sw = Saturations[1, c]
                Δp[1, c] = -pcow_c(sw)
                Δp[2, c] = 0
            end
        else
            @inbounds for c in 1:nc
                reg = region(pc.regions, c)
                pcow_c = table_by_region(pcow, reg)
                pcog_c = table_by_region(pcog, reg)
                sw = Saturations[1, c]
                sg = Saturations[3, c]
                Δp[1, c] = -pcow_c(sw)
                Δp[2, c] = pcog_c(sg)
            end
        end
    else
        error("Only implemented for two and three-phase flow.")
    end
end