// Generated by js_of_ocaml
//# buildInfo:effects=false, kind=cma, use-js-string=true, version=5.6.0

//# unitInfo: Provides: Moption__
(function
  (globalThis){
   "use strict";
   var
    runtime = globalThis.jsoo_runtime,
    Moption = [0],
    Moption$0 = [0, Moption];
   runtime.caml_register_global(0, Moption$0, "Moption__");
   return;
  }
  (globalThis));

//# unitInfo: Provides: Moption__Import
//# unitInfo: Requires: Ppx_bench_lib__Benchmark_accumulator, Ppx_expect_runtime, Ppx_inline_test_lib, Ppx_module_timer_runtime
(function
  (globalThis){
   "use strict";
   var
    runtime = globalThis.jsoo_runtime,
    cst_Moption_Import = "Moption__Import",
    cst_moption = "moption";
   function caml_call1(f, a0){
    return (f.l >= 0 ? f.l : f.l = f.length) == 1
            ? f(a0)
            : runtime.caml_call_gen(f, [a0]);
   }
   function caml_call2(f, a0, a1){
    return (f.l >= 0 ? f.l : f.l = f.length) == 2
            ? f(a0, a1)
            : runtime.caml_call_gen(f, [a0, a1]);
   }
   var
    global_data = runtime.caml_get_global_data(),
    Ppx_module_timer_runtime = global_data.Ppx_module_timer_runtime,
    Ppx_bench_lib_Benchmark_accumu =
      global_data.Ppx_bench_lib__Benchmark_accumulator,
    Ppx_expect_runtime = global_data.Ppx_expect_runtime,
    Ppx_inline_test_lib = global_data.Ppx_inline_test_lib;
   caml_call1(Ppx_module_timer_runtime[4], cst_Moption_Import);
   caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1], cst_moption);
   caml_call1(Ppx_expect_runtime[1][1], "moption/src/import.ml");
   caml_call2(Ppx_inline_test_lib[6], cst_moption, "import.ml");
   caml_call1(Ppx_inline_test_lib[7], cst_moption);
   caml_call1(Ppx_expect_runtime[1][2], 0);
   caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2], 0);
   caml_call1(Ppx_module_timer_runtime[5], cst_Moption_Import);
   var Moption_Import = [0];
   runtime.caml_register_global(11, Moption_Import, cst_Moption_Import);
   return;
  }
  (globalThis));

//# unitInfo: Provides: Moption
//# unitInfo: Requires: Base__Invariant, Bin_prot__Common, Bin_prot__Shape, Bin_prot__Utils, Bin_shape, Core, Core__Option, Core__Sexpable, Core__Stable, Ppx_bench_lib__Benchmark_accumulator, Ppx_expect_runtime, Ppx_inline_test_lib, Ppx_module_timer_runtime, Sexplib0__Sexp_conv, Stable_witness, Stdlib__Obj
(function
  (globalThis){
   "use strict";
   var
    runtime = globalThis.jsoo_runtime,
    cst_Moption$1 = "Moption",
    cst_moption$0 = "moption",
    cst_moption_src_moption_ml = "moption/src/moption.ml";
   function caml_call1(f, a0){
    return (f.l >= 0 ? f.l : f.l = f.length) == 1
            ? f(a0)
            : runtime.caml_call_gen(f, [a0]);
   }
   function caml_call2(f, a0, a1){
    return (f.l >= 0 ? f.l : f.l = f.length) == 2
            ? f(a0, a1)
            : runtime.caml_call_gen(f, [a0, a1]);
   }
   function caml_call3(f, a0, a1, a2){
    return (f.l >= 0 ? f.l : f.l = f.length) == 3
            ? f(a0, a1, a2)
            : runtime.caml_call_gen(f, [a0, a1, a2]);
   }
   function caml_call4(f, a0, a1, a2, a3){
    return (f.l >= 0 ? f.l : f.l = f.length) == 4
            ? f(a0, a1, a2, a3)
            : runtime.caml_call_gen(f, [a0, a1, a2, a3]);
   }
   var
    global_data = runtime.caml_get_global_data(),
    Core_Option = global_data.Core__Option,
    Base_Invariant = global_data.Base__Invariant,
    Sexplib0_Sexp_conv = global_data.Sexplib0__Sexp_conv,
    Core = global_data.Core,
    Bin_prot_Common = global_data.Bin_prot__Common,
    Core_Stable = global_data.Core__Stable,
    Bin_shape = global_data.Bin_shape,
    Bin_prot_Shape = global_data.Bin_prot__Shape,
    Stable_witness = global_data.Stable_witness,
    Ppx_module_timer_runtime = global_data.Ppx_module_timer_runtime,
    Ppx_bench_lib_Benchmark_accumu =
      global_data.Ppx_bench_lib__Benchmark_accumulator,
    Ppx_expect_runtime = global_data.Ppx_expect_runtime,
    Ppx_inline_test_lib = global_data.Ppx_inline_test_lib,
    Stdlib_Obj = global_data.Stdlib__Obj,
    Core_Sexpable = global_data.Core__Sexpable,
    Bin_prot_Utils = global_data.Bin_prot__Utils;
   caml_call1(Ppx_module_timer_runtime[4], cst_Moption$1);
   caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1], cst_moption$0);
   caml_call1(Ppx_expect_runtime[1][1], cst_moption_src_moption_ml);
   caml_call2(Ppx_inline_test_lib[6], cst_moption$0, "moption.ml");
   var
    none = runtime.caml_obj_block(Stdlib_Obj[14], 1),
    _b_ = [0, "_"],
    _c_ = [0, cst_moption_src_moption_ml, 107, 2789, 2811],
    cst_Moption_get_some_exn = "Moption.get_some_exn",
    cst_Moption = cst_Moption$1,
    cst_afef8a9c_daba_11ed_a4e5_aa = "afef8a9c-daba-11ed-a4e5-aa777790ac98",
    cst_moption = cst_moption$0,
    cst_Moption$0 = cst_Moption$1;
   function create(param){return [0, none];}
   function is_none(x){return x[1] === none ? 1 : 0;}
   function to_sexpable(t){return is_none(t) ? 0 : [0, t[1]];}
   function unsafe_get(t){return t[1];}
   var
    Optional_syntax = [0, is_none, unsafe_get],
    Optional_syntax$0 = [0, Optional_syntax];
   function stable_witness(a_stable_witness){return Stable_witness[6];}
   function of_sexpable(param){
    if(! param) return create(0);
    var v = param[1];
    return [0, v];
   }
   var
    _a_ = Core_Option[68][1],
    include =
      caml_call1
       (caml_call1(Core_Sexpable[2][2][1], [0, _a_[14], _a_[15]]),
        [0, to_sexpable, of_sexpable]),
    t_of_sexp = include[1],
    sexp_of_t = include[2];
   function bin_shape_t(bin_shape_a){
    var _k_ = caml_call1(Bin_shape[5][1], cst_afef8a9c_daba_11ed_a4e5_aa);
    return caml_call2(Bin_prot_Shape[12], _k_, [0, bin_shape_a, 0]);
   }
   function bin_size_t(bin_size_a, ppx_optional_e_0){
    if(caml_call1(Optional_syntax$0[1][1], ppx_optional_e_0))
     return caml_call1(Core_Stable[2], 0);
    var
     a = caml_call1(Optional_syntax$0[1][2], ppx_optional_e_0),
     _j_ = caml_call1(bin_size_a, a);
    return caml_call1(Core_Stable[2], 1) + _j_ | 0;
   }
   function bin_write_t(bin_write_a, buf, pos, ppx_optional_e_0){
    if(caml_call1(Optional_syntax$0[1][1], ppx_optional_e_0))
     return caml_call3(Core_Stable[93], buf, pos, 0);
    var
     a = caml_call1(Optional_syntax$0[1][2], ppx_optional_e_0),
     pos$0 = caml_call3(Core_Stable[93], buf, pos, 1);
    return caml_call3(bin_write_a, buf, pos$0, a);
   }
   function bin_read_t(bin_read_a, buf, pos_ref){
    return caml_call2(Core_Stable[96], buf, pos_ref)
            ? [0, caml_call2(bin_read_a, buf, pos_ref)]
            : create(0);
   }
   function bin_read_t$0(param, _i_, pos_ref, _h_){
    return caml_call2(Bin_prot_Common[19], cst_Moption, pos_ref[1]);
   }
   var
    Minimal_bin_io =
      [0, bin_shape_t, bin_size_t, bin_write_t, bin_read_t, bin_read_t$0],
    include$0 = caml_call1(Bin_prot_Utils[7], Minimal_bin_io),
    bin_shape_t$0 = include$0[1],
    bin_size_t$0 = include$0[2],
    bin_write_t$0 = include$0[3],
    bin_read_t$1 = include$0[4],
    bin_read_t$2 = include$0[5],
    bin_writer_t = include$0[6],
    bin_reader_t = include$0[7],
    bin_t = include$0[8];
   function is_some(x){return 1 - is_none(x);}
   function get_some_exn(x){
    if(! is_none(x)) return x[1];
    var _g_ = caml_call1(Sexplib0_Sexp_conv[7], cst_Moption_get_some_exn);
    return caml_call1(Core[261], _g_);
   }
   function set_some(t, v){t[1] = v; return 0;}
   function set_none(t){t[1] = none; return 0;}
   function set(t, v){
    if(! v) return set_none(t);
    var v$0 = v[1];
    return set_some(t, v$0);
   }
   function invariant(invariant_a, t){
    function _d_(param){
     var _f_ = to_sexpable(t);
     return caml_call2(Core_Option[46], _f_, invariant_a);
    }
    function _e_(x_001){
     return caml_call2(sexp_of_t, function(param){return _b_;}, x_001);
    }
    return caml_call4(Base_Invariant[1], _c_, t, _e_, _d_);
   }
   caml_call1(Ppx_inline_test_lib[7], cst_moption);
   caml_call1(Ppx_expect_runtime[1][2], 0);
   caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2], 0);
   caml_call1(Ppx_module_timer_runtime[5], cst_Moption$0);
   var
    Moption =
      [0,
       bin_shape_t$0,
       bin_size_t$0,
       bin_write_t$0,
       bin_read_t$1,
       bin_read_t$2,
       bin_writer_t,
       bin_reader_t,
       bin_t,
       t_of_sexp,
       sexp_of_t,
       invariant,
       Optional_syntax$0,
       create,
       is_none,
       is_some,
       to_sexpable,
       get_some_exn,
       unsafe_get,
       set,
       set_none,
       set_some,
       [0,
        [0,
         bin_shape_t$0,
         bin_size_t$0,
         bin_write_t$0,
         bin_read_t$1,
         bin_read_t$2,
         bin_writer_t,
         bin_reader_t,
         bin_t,
         t_of_sexp,
         sexp_of_t,
         stable_witness]]];
   runtime.caml_register_global(28, Moption, cst_Moption$1);
   return;
  }
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJtb3B0aW9uLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6WyJub25lIiwiY3JlYXRlIiwiaXNfbm9uZSIsIngiLCJ0b19zZXhwYWJsZSIsInQiLCJ1bnNhZmVfZ2V0Iiwic3RhYmxlX3dpdG5lc3MiLCJhX3N0YWJsZV93aXRuZXNzIiwib2Zfc2V4cGFibGUiLCJ2IiwiYmluX3NoYXBlX3QiLCJiaW5fc2hhcGVfYSIsImJpbl9zaXplX3QiLCJiaW5fc2l6ZV9hIiwicHB4X29wdGlvbmFsX2VfMCIsImEiLCJiaW5fd3JpdGVfdCIsImJpbl93cml0ZV9hIiwiYnVmIiwicG9zIiwicG9zJDAiLCJiaW5fcmVhZF90IiwiYmluX3JlYWRfYSIsInBvc19yZWYiLCJiaW5fcmVhZF90JDAiLCJpc19zb21lIiwiZ2V0X3NvbWVfZXhuIiwic2V0X3NvbWUiLCJzZXRfbm9uZSIsInNldCIsInYkMCIsImludmFyaWFudCIsImludmFyaWFudF9hIiwieF8wMDEiXSwic291cmNlcyI6WyIvaG9tZS9saWFtLWNhcnBlbnRlci8ub3BhbS9wZXJzb25hbC1zaXRlL2xpYi9jb3JlX2tlcm5lbC9tb3B0aW9uL21vcHRpb25fXy5tbCIsIi9ob21lL2xpYW0tY2FycGVudGVyLy5vcGFtL3BlcnNvbmFsLXNpdGUvbGliL2NvcmVfa2VybmVsL21vcHRpb24vbW9wdGlvbi5tbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztHQUttQjs7SUFBQTs7OztFOzs7Ozs7Ozs7Ozs7Rzs7Ozs7Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RTs7Ozs7Ozs7Ozs7OztHOzs7OztHOzs7OztHOzs7OztHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dDSUU7SUFBZkEsT0FBZTs7Ozs7Ozs7WUFDZkMsY0FBWSxXQURaRCxNQUNvQjtZQUNwQkUsUUFBUUMsR0FBSSxPQUFKQSxTQUZSSCxhQUU4QjtZQUM5QkksWUFBSUMsR0FBSSxPQURSSCxRQUNJRyxhQUFBQSxNQUF1QztZQUMzQ0MsV0FBV0QsR0FBSSxPQUFKQSxLQUFNO0dBR007SUFBQSxzQkFMdkJILFNBRUFJO0lBRXFCO0dBYXZCLFNBQVFDLGVBQUhDLGtCO1lBVUtDO0lBQWMsWUFDTixPQTdCaEJSO1FBOEJhUztJQUFLLFdBQUxBO0dBQVU7Ozs7OztZQTVCdkJOLGFBMEJRSzs7O1lBV0pFLFlBQVlDO0lBRVosVUFBQTtJQUNBLE9BQUEsd0NBSFlBO0dBR0c7WUFHZkMsV0FBV0MsWUFDRUM7SSx1Q0FBQUE7S0FDTCxPQUFBO0lBQ3VCO0tBQTFCQyx3Q0FGUUQ7S0FFa0IsTUFBQSxXQUhwQkQsWUFHTkU7SUFBSyxPQUFBOztZQUdWQyxZQUFZQyxhQUFZQyxLQUFLQyxLQUNoQkw7SSx1Q0FBQUE7S0FDTCxPQUFBLDRCQUZnQkksS0FBS0M7SUFJbkI7S0FETEosd0NBRlFEO0tBR1RNLFFBQU0sNEJBSmNGLEtBQUtDO0lBSzdCLE9BQUEsV0FMWUYsYUFBWUMsS0FJcEJFLE9BRENMOztZQUtMTSxXQUFXQyxZQUFXSixLQUFLSztJQUM3QixPQUFNLDRCQURrQkwsS0FBS0s7a0JBR2YsV0FIREQsWUFBV0osS0FBS0s7Y0EzRC9CdkI7R0E4RHlDO1lBR3JDd0IseUJBR0REO0lBR0Qsb0RBSENBO0dBRzBEO0dBbkN2QztJQUFBO1VBR2xCYixhQU1BRSxZQU1BSSxhQVFBSyxZQU1BRzs7Ozs7Ozs7OztZQW1CTkMsUUFBUXZCLEdBQUksV0FuRlZELFFBbUZNQyxHQUFtQjtZQUMzQndCLGFBQWF4QjtJQUFJLEtBcEZmRCxRQW9GV0MsV0FBQUE7OztHQUF1RTtZQUNwRnlCLFNBQVN2QixHQUFFSyxHQUFGTCxPQUFFSyxZQUFVO1lBQ3JCbUIsU0FBU3hCLEdBQUFBLE9BeEZQTCxlQXdGb0I7WUFFdEI4QixJQUFJekIsR0FBRUs7SUFDUixLQURRQSxHQUVFLE9BSlJtQixTQUVJeEI7UUFHQzBCLE1BSENyQjtJQUdJLE9BTlZrQixTQUdJdkIsR0FHQzBCO0dBQWlCO1lBR3RCQyxVQUFVQyxhQUFZNUI7O0tBRVYsVUEvRlZELFlBNkZvQkM7S0FFVixPQUFBLGlDQUZGNEI7SUFFd0I7aUJBREtDO0ssNkMsY0FBQUE7O0lBQUssT0FBQSxtQ0FEdEI3QjtHQUVhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FGbkMyQjs7T0EvRkUvQjtPQUNBQztPQW1GRndCO09BbEZFdEI7T0FtRkZ1QjtPQWxGRXJCO09Bc0ZGd0I7T0FGQUQ7T0FEQUQ7Ozs7Ozs7Ozs7Ozs7U0FwRVFyQjs7O0UiLCJzb3VyY2VzQ29udGVudCI6WyIoKiBnZW5lcmF0ZWQgYnkgZHVuZSAqKVxuXG4oKiogQGNhbm9uaWNhbCBNb3B0aW9uLkltcG9ydCAqKVxubW9kdWxlIEltcG9ydCA9IE1vcHRpb25fX0ltcG9ydFxuXG5tb2R1bGUgTW9wdGlvbl9fID0gc3RydWN0IGVuZFxuW0BAZGVwcmVjYXRlZCBcInRoaXMgbW9kdWxlIGlzIHNoYWRvd2VkXCJdXG4iLCJtb2R1bGUgRXhwb3NlZF9mb3JfdXNlX2luX3N0YWJsZSA9IHN0cnVjdFxuICBvcGVuISBDb3JlXG4gIG9wZW4hIEltcG9ydFxuXG4gICgqIEJlaW5nIGEgcG9pbnRlciwgbm8gb25lIG91dHNpZGUgdGhpcyBtb2R1bGUgY2FuIGNvbnN0cnVjdCBhIHZhbHVlIHRoYXQgaXNcbiAgICAgW3BoeXNfc2FtZV0gYXMgdGhpcyBvbmUuXG5cbiAgICAgdGhpcyBjb2RlIGlzIGR1cGxpY2F0ZWQgaW4gT3B0aW9uX2FycmF5LkNoZWFwX29wdGlvbiwgYW5kIGlmIHdlIGZpbmQgeWV0IGFub3RoZXJcbiAgICAgcGxhY2Ugd2hlcmUgd2Ugd2FudCBpdCB3ZSBzaG91bGQgcmVjb25zaWRlciBtYWtpbmcgaXQgc2hhcmVkLiAqKVxuICBsZXQgbm9uZSA9IE9iai5vYmogKE9iai5uZXdfYmxvY2sgT2JqLmFic3RyYWN0X3RhZyAxKVxuICBsZXQgY3JlYXRlICgpID0gcmVmIG5vbmVcbiAgbGV0IGlzX25vbmUgeCA9IHBoeXNfZXF1YWwgIXggbm9uZVxuICBsZXQgZ2V0IHQgPSBpZiBpc19ub25lIHQgdGhlbiBOb25lIGVsc2UgU29tZSAhdFxuICBsZXQgdW5zYWZlX2dldCB0ID0gIXRcblxuICBtb2R1bGUgT3B0aW9uYWxfc3ludGF4ID0gc3RydWN0XG4gICAgbW9kdWxlIE9wdGlvbmFsX3N5bnRheCA9IHN0cnVjdFxuICAgICAgbGV0IGlzX25vbmUgPSBpc19ub25lXG4gICAgICBsZXQgdW5zYWZlX3ZhbHVlID0gdW5zYWZlX2dldFxuICAgIGVuZFxuICBlbmRcbmVuZFxuXG5tb2R1bGUgU3RhYmxlID0gc3RydWN0XG4gIG9wZW4hIENvcmUuQ29yZV9zdGFibGVcbiAgb3BlbiBFeHBvc2VkX2Zvcl91c2VfaW5fc3RhYmxlXG5cbiAgbW9kdWxlIFYxID0gc3RydWN0XG4gICAgdHlwZSAnYSB0ID0gJ2EgcmVmIFtAQGRlcml2aW5nIHN0YWJsZV93aXRuZXNzXVxuXG4gICAgaW5jbHVkZVxuICAgICAgU2V4cGFibGUuT2Zfc2V4cGFibGUxLlYxXG4gICAgICAgIChPcHRpb24uVjEpXG4gICAgICAgIChzdHJ1Y3RcbiAgICAgICAgICB0eXBlIG5vbnJlYyAnYSB0ID0gJ2EgdFxuXG4gICAgICAgICAgbGV0IHRvX3NleHBhYmxlID0gZ2V0XG5cbiAgICAgICAgICBsZXQgb2Zfc2V4cGFibGUgPSBmdW5jdGlvblxuICAgICAgICAgICAgfCBOb25lIC0+IGNyZWF0ZSAoKVxuICAgICAgICAgICAgfCBTb21lIHYgLT4gcmVmIHZcbiAgICAgICAgICA7O1xuICAgICAgICBlbmQpXG5cbiAgICAoKiBOLmIuIHRoaXMgW2Jpbl9pb10gaW1wbGVtZW50YXRpb24gaXMgaGFuZC1yb2xsZWQgcmF0aGVyIHRoYW4gdXNpbmcgZS5nLlxuICAgICAgIFtCaW5hYmxlLk9mX2JpbmFibGUxLlYyIChPcHRpb24uVjEpXSBpbiBvcmRlciB0byBhdm9pZCBhbGxvY2F0aW5nIHRoZSBvcHRpb24uICopXG4gICAgbW9kdWxlIE1pbmltYWxfYmluX2lvID0gc3RydWN0XG4gICAgICB0eXBlIG5vbnJlYyAnYSB0ID0gJ2EgdFxuXG4gICAgICBsZXQgYmluX3NoYXBlX3QgYmluX3NoYXBlX2EgPVxuICAgICAgICBCaW5fcHJvdC5TaGFwZS5iYXNldHlwZVxuICAgICAgICAgIChCaW5fcHJvdC5TaGFwZS5VdWlkLm9mX3N0cmluZyBcImFmZWY4YTljLWRhYmEtMTFlZC1hNGU1LWFhNzc3NzkwYWM5OFwiKVxuICAgICAgICAgIFsgYmluX3NoYXBlX2EgXVxuICAgICAgOztcblxuICAgICAgbGV0IGJpbl9zaXplX3QgYmluX3NpemVfYSB0ID1cbiAgICAgICAgbWF0Y2glb3B0aW9uYWwgKHQgOiBfIHQpIHdpdGhcbiAgICAgICAgfCBOb25lIC0+IGJpbl9zaXplX2Jvb2wgZmFsc2VcbiAgICAgICAgfCBTb21lIGEgLT4gYmluX3NpemVfYm9vbCB0cnVlICsgYmluX3NpemVfYSBhXG4gICAgICA7O1xuXG4gICAgICBsZXQgYmluX3dyaXRlX3QgYmluX3dyaXRlX2EgYnVmIH5wb3MgdCA9XG4gICAgICAgIG1hdGNoJW9wdGlvbmFsICh0IDogXyB0KSB3aXRoXG4gICAgICAgIHwgTm9uZSAtPiBiaW5fd3JpdGVfYm9vbCBidWYgfnBvcyBmYWxzZVxuICAgICAgICB8IFNvbWUgYSAtPlxuICAgICAgICAgIGxldCBwb3MgPSBiaW5fd3JpdGVfYm9vbCBidWYgfnBvcyB0cnVlIGluXG4gICAgICAgICAgYmluX3dyaXRlX2EgYnVmIH5wb3MgYVxuICAgICAgOztcblxuICAgICAgbGV0IGJpbl9yZWFkX3QgYmluX3JlYWRfYSBidWYgfnBvc19yZWYgPVxuICAgICAgICBtYXRjaCBiaW5fcmVhZF9ib29sIGJ1ZiB+cG9zX3JlZiB3aXRoXG4gICAgICAgIHwgZmFsc2UgLT4gY3JlYXRlICgpXG4gICAgICAgIHwgdHJ1ZSAtPiByZWYgKGJpbl9yZWFkX2EgYnVmIH5wb3NfcmVmKVxuICAgICAgOztcblxuICAgICAgbGV0IF9fYmluX3JlYWRfdF9fXG4gICAgICAgIChfIDogXyBCaW5fcHJvdC5SZWFkLnJlYWRlcilcbiAgICAgICAgKF8gOiBCaWdzdHJpbmcuVjEudClcbiAgICAgICAgfnBvc19yZWZcbiAgICAgICAgKF8gOiBpbnQpXG4gICAgICAgID1cbiAgICAgICAgQmluX3Byb3QuQ29tbW9uLnJhaXNlX3ZhcmlhbnRfd3JvbmdfdHlwZSBcIk1vcHRpb25cIiAhcG9zX3JlZlxuICAgICAgOztcbiAgICBlbmRcblxuICAgIGluY2x1ZGUgQmluX3Byb3QuVXRpbHMuT2ZfbWluaW1hbDEgKE1pbmltYWxfYmluX2lvKVxuICBlbmRcbmVuZFxuXG5vcGVuISBDb3JlXG5vcGVuISBJbXBvcnRcbmluY2x1ZGUgU3RhYmxlLlYxXG5pbmNsdWRlIEV4cG9zZWRfZm9yX3VzZV9pbl9zdGFibGVcblxubGV0IGlzX3NvbWUgeCA9IG5vdCAoaXNfbm9uZSB4KVxubGV0IGdldF9zb21lX2V4biB4ID0gaWYgaXNfbm9uZSB4IHRoZW4gcmFpc2VfcyBbJW1lc3NhZ2UgXCJNb3B0aW9uLmdldF9zb21lX2V4blwiXSBlbHNlICF4XG5sZXQgc2V0X3NvbWUgdCB2ID0gdCA6PSB2XG5sZXQgc2V0X25vbmUgdCA9IHQgOj0gbm9uZVxuXG5sZXQgc2V0IHQgdiA9XG4gIG1hdGNoIHYgd2l0aFxuICB8IE5vbmUgLT4gc2V0X25vbmUgdFxuICB8IFNvbWUgdiAtPiBzZXRfc29tZSB0IHZcbjs7XG5cbmxldCBpbnZhcmlhbnQgaW52YXJpYW50X2EgdCA9XG4gIEludmFyaWFudC5pbnZhcmlhbnQgWyVoZXJlXSB0IFslc2V4cF9vZjogXyB0XSAoZnVuICgpIC0+XG4gICAgT3B0aW9uLml0ZXIgKGdldCB0KSB+ZjppbnZhcmlhbnRfYSlcbjs7XG4iXX0=
