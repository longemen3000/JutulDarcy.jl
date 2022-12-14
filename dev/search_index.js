var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = JutulDarcy","category":"page"},{"location":"#JutulDarcy","page":"Home","title":"JutulDarcy","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for JutulDarcy.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [JutulDarcy]","category":"page"},{"location":"#JutulDarcy.MIN_ACTIVE_WELL_RATE","page":"Home","title":"JutulDarcy.MIN_ACTIVE_WELL_RATE","text":"(Absolute) Minimum well rate for a well that is not disabled.\n\n\n\n\n\n","category":"constant"},{"location":"#JutulDarcy.MIN_INITIAL_WELL_RATE","page":"Home","title":"JutulDarcy.MIN_INITIAL_WELL_RATE","text":"(Absolute) Minimum initial rate for wells when controls are updated.\n\n\n\n\n\n","category":"constant"},{"location":"#JutulDarcy.BlackOilX-Tuple{StandardBlackOilSystem{<:Any, <:Any, <:Any, <:Any, :varswitch}, Any}","page":"Home","title":"JutulDarcy.BlackOilX","text":"BlackOilX(sys::BlackOilVariableSwitchingSystem, p; sw = 0.0, so = 0.0, sg = 0.0, rs = 0.0, rv = 0.0)\n\nHigh level initializer for the black oil unknown degree of freedom. Will try to fill in the gaps unless system is really underspecified.\n\n\n\n\n\n","category":"method"},{"location":"#JutulDarcy.CPRPreconditioner","page":"Home","title":"JutulDarcy.CPRPreconditioner","text":"Constrained pressure residual\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.DisabledControl","page":"Home","title":"JutulDarcy.DisabledControl","text":"DisabledControl()\n\nControl that disables a well. If a well is disabled, it is disconnected from the surface network and no flow occurs between the well and the top side. Mass transfer can still occur inside the well, and between the well and the reservoir.\n\nSee also ProducerControl, InjectorControl.\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.DisabledTarget","page":"Home","title":"JutulDarcy.DisabledTarget","text":"DisabledTarget(q)\n\nDisabled target used when a well is under DisabledControl() only.\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.HistoricalReservoirVoidageTarget","page":"Home","title":"JutulDarcy.HistoricalReservoirVoidageTarget","text":"HistoricalReservoirVoidageTarget(q, weights)\n\nHistorical RESV target for history matching cases.\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.ImmiscibleSaturation","page":"Home","title":"JutulDarcy.ImmiscibleSaturation","text":"A single saturation that represents the \"other\" phase in a three phase compositional system where two phases are predicted by an EoS\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.InjectorControl","page":"Home","title":"JutulDarcy.InjectorControl","text":"InjectorControl(target, mix, [density])\n\nWell control that specifies injection into the reservoir. target specifies the type of target and mix defines the injection mass fractions for all species in the model during injection. \n\nFor example, for a three-component system made up of CO2, H2O and H2, setting [0.1, 0.6, 0.3] would mean that the injection stream would contain 1 part CO2, 6 parts H2O and 3 parts H2 by mass. For an immiscible system (e.g. LiquidPhase(), VaporPhase()) the species corresponds to phases and [0.3, 0.7] would mean a 3 to 7 mixture of liquid and vapor by mass.\n\nThe density of the injected fluid at surface conditions is given by density which is defaulted to 1.0 if not given.\n\nSee also ProducerControl, DisabledControl.\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.MinimalTPFAGrid","page":"Home","title":"JutulDarcy.MinimalTPFAGrid","text":"MinimalTPFAGrid(ϕ, N)\n\nGenerate a minimal grid suitable only for two-point flux discretization (TPFA) for given pore-volumes ϕ and a neighborship matrix N with size (2, n) where n is the number of internal faces.\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.MixedWellSegmentFlow","page":"Home","title":"JutulDarcy.MixedWellSegmentFlow","text":"Two point approximation with flux for wells\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.Perforations","page":"Home","title":"JutulDarcy.Perforations","text":"Perforations are connections from well cells to reservoir vcells\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.PhaseMassDensities","page":"Home","title":"JutulDarcy.PhaseMassDensities","text":"Mass density of each phase\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.Pressure","page":"Home","title":"JutulDarcy.Pressure","text":"Pressure\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.ProducerControl","page":"Home","title":"JutulDarcy.ProducerControl","text":"ProducerControl(target)\n\nWell control for production out of the reservoir. target specifies the type of target (for example BottomHolePressureTarget()).\n\nSee also DisabledControl, InjectorControl.\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.ReservoirRelativePermeability","page":"Home","title":"JutulDarcy.ReservoirRelativePermeability","text":"Interpolated multiphase rel. perm. that is simple (single region, no magic for more than two phases)\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.ReservoirVoidageTarget","page":"Home","title":"JutulDarcy.ReservoirVoidageTarget","text":"ReservoirVoidageTarget(q, weights)\n\nRESV targets with weights for each pseudo-component\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.SegmentWellBoreFrictionHB","page":"Home","title":"JutulDarcy.SegmentWellBoreFrictionHB","text":"Hagedorn and Brown well bore friction model for a segment.\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.SinglePhaseRateTarget","page":"Home","title":"JutulDarcy.SinglePhaseRateTarget","text":"SinglePhaseRateTarget(q, phase)\n\nSingle-phase well target with value q specified for phase.\n\nExamples\n\njulia> SinglePhaseRateTarget(0.001, LiquidPhase())\nSinglePhaseRateTarget of 0.001 [m^3/s] for LiquidPhase()\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.SurfaceGasRateTarget","page":"Home","title":"JutulDarcy.SurfaceGasRateTarget","text":"SurfaceGasRateTarget(q)\n\nWell target of specified gas rate with value q at surface conditions.\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.SurfaceLiquidRateTarget","page":"Home","title":"JutulDarcy.SurfaceLiquidRateTarget","text":"SurfaceLiquidRateTarget(q)\n\nWell target of specified liquid rate with value q (liquid/oil and water, but not gas) at surface conditions.\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.SurfaceOilRateTarget","page":"Home","title":"JutulDarcy.SurfaceOilRateTarget","text":"SurfaceOilRateTarget(q)\n\nWell target of specified oil rate with value q at surface conditions.\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.SurfaceWaterRateTarget","page":"Home","title":"JutulDarcy.SurfaceWaterRateTarget","text":"SurfaceWaterRateTarget(q)\n\nWell target of specified water rate with value q at surface conditions.\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.TabulatedRelPermSimple","page":"Home","title":"JutulDarcy.TabulatedRelPermSimple","text":"Interpolated multiphase rel. perm. that is simple (single region, no magic for more than two phases)\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.TotalRateTarget","page":"Home","title":"JutulDarcy.TotalRateTarget","text":"TotalRateTarget(q)\n\nWell target of specified total rate of all phases with value q at surface conditions.\n\n\n\n\n\n","category":"type"},{"location":"#JutulDarcy.full_well_outputs-Tuple{Any, Any, Any}","page":"Home","title":"JutulDarcy.full_well_outputs","text":"full_well_outputs(model, states, forces; targets = available_well_targets(model.models.Reservoir), shortname = false)\n\nGet the full set of well outputs after a simulation has occured, for plotting or other post-processing.\n\n\n\n\n\n","category":"method"},{"location":"#JutulDarcy.replace_target","page":"Home","title":"JutulDarcy.replace_target","text":"replace_target(ctrl, new_target)\n\nCreate new well control using ctrl as a template that operates under new_target.\n\n\n\n\n\n","category":"function"},{"location":"#JutulDarcy.reservoir_linsolve","page":"Home","title":"JutulDarcy.reservoir_linsolve","text":"reservoir_linsolve(model, precond = :cpr; <keyword arguments>)\n\nSet up iterative linear solver for a reservoir model from setup_reservoir_model.\n\nArguments\n\nmodel: Reservoir model that will linearize the equations for the linear solver\nprecond=:cpr: Preconditioner type to use: Either :cpr (Constrained-Pressure-Residual) or :ilu0 (block-incomplete-LU) (no effect if solver = :direct).\nv=0: verbosity (can lead to a large amount of output)\nsolver=:bicgstab: the symbol of a Krylov.jl solver (typically :gmres or :bicgstab)\nupdate_interval=:once: how often the CPR AMG hierarchy is reconstructed (:once, :iteration, :ministep, :step)\nupdate_interval_partial=:iteration: how often the pressure system is updated in CPR\nmax_coarse: max size of coarse level if using AMG\ncpr_type=nothing: type of CPR (:true_impes, :quasi_impes or nothing for automatic)\npartial_update=true: perform partial update of CPR preconditioner outside of AMG update (see above)\nrtol=1e-3: relative tolerance for the linear solver\nmax_iterations=100: limit for linear solver iterations\n\nAdditional keywords are passed onto the linear solver constructor.\n\n\n\n\n\n","category":"function"},{"location":"#JutulDarcy.setup_reservoir_forces-Tuple{Jutul.MultiModel}","page":"Home","title":"JutulDarcy.setup_reservoir_forces","text":"setup_reservoir_forces(model; control = nothing, limits = nothing, set_default_limits = true, <keyword arguments>)\n\nSet up driving forces for a reservoir model with wells\n\n\n\n\n\n","category":"method"},{"location":"#JutulDarcy.setup_reservoir_model-Tuple{Any, Any}","page":"Home","title":"JutulDarcy.setup_reservoir_model","text":"setup_reservoir_model(reservoir, system; wells = [], <keyword arguments>)\nsetup_reservoir_model(reservoir, system; wells = [], context = DefaultContext(), reservoir_context = nothing, backend = :csc, <keyword arguments>)\n\nSet up a reservoir MultiModel for a given reservoir SimulationModel and an optional vector of wells.\n\nThe routine automatically sets up a facility and couples the wells with the reservoir and that facility.\n\n\n\n\n\n","category":"method"},{"location":"#JutulDarcy.setup_reservoir_simulator","page":"Home","title":"JutulDarcy.setup_reservoir_simulator","text":"setup_reservoir_simulator(models, initializer, parameters = nothing; <keyword arguments>)\n\nArguments\n\nmodels: either a single model or a Dict with the key :Reservoir for multimodels\ninitializer: used to setup state0, must be compatible with model\nparameters: initialized parameters, must be compatible with model if provided\nlinear_solver=:bicgstab: iterative solver to use (provided model supports it)\nprecond=:cpr: preconditioner for iterative solver: Either :cpr or :ilu0.\nrtol=1e-3: relative tolerance for linear solver\ninitial_dt=3600*24.0: initial time-step in seconds (one day by default)\ntarget_its=8: target number of nonlinear iterations per time step\noffset_its=1: dampening parameter for time step selector where larger values lead to more pessimistic estimates.\ntol_cnv=1e-3: maximum allowable point-wise error (volume-balance)\ntol_mb=1e-7: maximum alllowable integrated error (mass-balance)\nspecialize=false: use deep specialization of storage for faster execution, but significantly more compile time\n\nAdditional keyword arguments are passed onto simulator_config.\n\n\n\n\n\n","category":"function"},{"location":"#JutulDarcy.setup_reservoir_state-Tuple{Any}","page":"Home","title":"JutulDarcy.setup_reservoir_state","text":"setup_reservoir_state(model, <keyword arguments>)\n# Ex: For immiscible two-phase\nsetup_reservoir_state(model, Pressure = 1e5, Saturations = [0.2, 0.8])\n\nConvenience constructor that initializes a state for a MultiModel set up using setup_reservoir_model. The main convenience over setup_state is only the reservoir initialization values need be provided: wells are automatically initialized from the connected reservoir cells.\n\n\n\n\n\n","category":"method"},{"location":"#JutulDarcy.simulate_mrst_case-Tuple{Any}","page":"Home","title":"JutulDarcy.simulate_mrst_case","text":"simulate_mrst_case(file_name; kwarg...)\n\nSimulate a MRST case from file_name as exported by writeJutulInput in MRST.\n\nArguments\n\nfile_name::String: The path to a .mat file that is to be simulated.\nextra_outputs::Vector{Symbol} = [:Saturations]: Additional variables to output from the simulation.\nwrite_output::Bool = true: Write output (in the default JLD2 format)\noutput_path = nothing: Directory for output files. Files will be written under this directory. Defaults to the folder of file_name.\nwrite_mrst = true: Write MRST compatible output after completed simulation that can be read by readJutulOutput in MRST.\nbackend=:csc: choice of backend for linear systems. :csc for default Julia sparse, :csr for experimental parallel CSR.\nverbose=true: print some extra information specific to this routine upon calling\nnthreads=Threads.nthreads(): number of threads to use\nlinear_solver=:bicgstab: name of Krylov.jl solver to use, or :direct (for small cases only)\ninfo_level=0: standard Jutul info_level. 0 for minimal printing, -1 for no printing, 1-5 for various levels of verbosity\n\nAdditional input arguments are passed onto setup_reservoir_simulator and simulator_config if applicable.\n\n\n\n\n\n","category":"method"},{"location":"#JutulDarcy.two_phase_compositional_mass!-Tuple{Any, Any, Any, Any, Any, Any, Any, Any, Any, Val{false}, Any}","page":"Home","title":"JutulDarcy.two_phase_compositional_mass!","text":"Update total masses for two-phase compositional\n\n\n\n\n\n","category":"method"},{"location":"#JutulDarcy.two_phase_compositional_mass!-Tuple{Any, Any, Any, Any, Any, Any, Any, Any, Any, Val{true}, Any}","page":"Home","title":"JutulDarcy.two_phase_compositional_mass!","text":"Update total masses for two-phase compositional where another immiscible phase is present\n\n\n\n\n\n","category":"method"},{"location":"#JutulDarcy.well_mismatch-NTuple{9, Any}","page":"Home","title":"JutulDarcy.well_mismatch","text":"well_mismatch(qoi, wells, model_f, states_f, model_c, state_c, dt, step_no, forces; <keyword arguments>)\n\nCompute well mismatch for a set of qoi's (well targets) and a set of well symbols.\n\n\n\n\n\n","category":"method"},{"location":"#JutulDarcy.well_output","page":"Home","title":"JutulDarcy.well_output","text":"well_output(model, states, well_symbol, forces, target = BottomHolePressureTarget)\n\nGet a specific well output from a valid operational target once a simulation is completed an states are available.\n\n\n\n\n\n","category":"function"},{"location":"#JutulDarcy.well_target-Tuple{Any, BottomHolePressureTarget, Any, Any, Any, Any}","page":"Home","title":"JutulDarcy.well_target","text":"Well target contribution from well itself (bhp)\n\n\n\n\n\n","category":"method"},{"location":"#JutulDarcy.well_target-Tuple{Any, DisabledTarget, Any, Any, Any, Any}","page":"Home","title":"JutulDarcy.well_target","text":"Well target contribution from well itself (disabled, zero value)\n\n\n\n\n\n","category":"method"},{"location":"#JutulDarcy.well_target-Tuple{InjectorControl, JutulDarcy.SurfaceVolumeTarget, Any, Any, Any, Any}","page":"Home","title":"JutulDarcy.well_target","text":"Well target contribution from well itself (surface volume, injector)\n\n\n\n\n\n","category":"method"},{"location":"#JutulDarcy.well_target-Tuple{InjectorControl, TotalRateTarget, Any, Any, Any, Any}","page":"Home","title":"JutulDarcy.well_target","text":"Well target contribution from well itself (surface volume, injector)\n\n\n\n\n\n","category":"method"},{"location":"#JutulDarcy.well_target-Tuple{ProducerControl, JutulDarcy.ReservoirVoidageTarget, Any, Any, Any, Any}","page":"Home","title":"JutulDarcy.well_target","text":"Well target contribution from well itself (RESV, producer)\n\n\n\n\n\n","category":"method"},{"location":"#JutulDarcy.well_target-Tuple{ProducerControl, JutulDarcy.SurfaceVolumeTarget, Any, Any, Any, Any}","page":"Home","title":"JutulDarcy.well_target","text":"Well target contribution from well itself (surface volume, producer)\n\n\n\n\n\n","category":"method"}]
}