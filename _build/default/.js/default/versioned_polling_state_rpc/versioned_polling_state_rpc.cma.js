// Generated by js_of_ocaml
//# buildInfo:effects=false, kind=cma, use-js-string=true, version=5.6.0

//# unitInfo: Provides: Versioned_polling_state_rpc__
(function
  (globalThis){
   "use strict";
   var
    runtime = globalThis.jsoo_runtime,
    Versioned_polling_state_rpc = [0],
    Versioned_polling_state_rpc$0 = [0, Versioned_polling_state_rpc];
   runtime.caml_register_global
    (0, Versioned_polling_state_rpc$0, "Versioned_polling_state_rpc__");
   return;
  }
  (globalThis));

//# unitInfo: Provides: Versioned_polling_state_rpc__Versioned_polling_state_rpc_intf
//# unitInfo: Requires: Ppx_bench_lib__Benchmark_accumulator, Ppx_expect_runtime, Ppx_inline_test_lib, Ppx_module_timer_runtime
(function
  (globalThis){
   "use strict";
   var
    runtime = globalThis.jsoo_runtime,
    cst_Versioned_polling_state_rp =
      "Versioned_polling_state_rpc__Versioned_polling_state_rpc_intf",
    cst_versioned_polling_state_rp = "versioned_polling_state_rpc";
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
   caml_call1(Ppx_module_timer_runtime[4], cst_Versioned_polling_state_rp);
   caml_call1
    (Ppx_bench_lib_Benchmark_accumu[1][1], cst_versioned_polling_state_rp);
   caml_call1
    (Ppx_expect_runtime[1][1], "src/versioned_polling_state_rpc_intf.ml");
   caml_call2
    (Ppx_inline_test_lib[6],
     cst_versioned_polling_state_rp,
     "versioned_polling_state_rpc_intf.ml");
   var Query = [0], Response = [0];
   caml_call1(Ppx_inline_test_lib[7], cst_versioned_polling_state_rp);
   caml_call1(Ppx_expect_runtime[1][2], 0);
   caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2], 0);
   caml_call1(Ppx_module_timer_runtime[5], cst_Versioned_polling_state_rp);
   var Versioned_polling_state_rpc_Ve = [0, Query, Response];
   runtime.caml_register_global
    (11, Versioned_polling_state_rpc_Ve, cst_Versioned_polling_state_rp);
   return;
  }
  (globalThis));

//# unitInfo: Provides: Versioned_polling_state_rpc
//# unitInfo: Requires: Async_rpc_kernel__Versioned_rpc, Babel__Caller, Base__Or_error, Bin_shape, Core__Binable, Polling_state_rpc, Ppx_bench_lib__Benchmark_accumulator, Ppx_expect_runtime, Ppx_inline_test_lib, Ppx_module_timer_runtime, Versioned_polling_state_rpc__Versioned_polling_state_rpc_intf
(function
  (globalThis){
   "use strict";
   var
    runtime = globalThis.jsoo_runtime,
    cst_Versioned_polling_state_rp$0 = "Versioned_polling_state_rpc",
    cst_versioned_polling_state_rp$0 = "versioned_polling_state_rpc";
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
    Async_rpc_kernel_Versioned_rpc =
      global_data.Async_rpc_kernel__Versioned_rpc,
    Babel_Caller = global_data.Babel__Caller,
    Base_Or_error = global_data.Base__Or_error,
    Polling_state_rpc = global_data.Polling_state_rpc,
    Bin_shape = global_data.Bin_shape,
    Core_Binable = global_data.Core__Binable,
    Ppx_module_timer_runtime = global_data.Ppx_module_timer_runtime,
    Ppx_bench_lib_Benchmark_accumu =
      global_data.Ppx_bench_lib__Benchmark_accumulator,
    Ppx_expect_runtime = global_data.Ppx_expect_runtime,
    Ppx_inline_test_lib = global_data.Ppx_inline_test_lib;
   caml_call1(Ppx_module_timer_runtime[4], cst_Versioned_polling_state_rp$0);
   caml_call1
    (Ppx_bench_lib_Benchmark_accumu[1][1], cst_versioned_polling_state_rp$0);
   caml_call1(Ppx_expect_runtime[1][1], "src/versioned_polling_state_rpc.ml");
   caml_call2
    (Ppx_inline_test_lib[6],
     cst_versioned_polling_state_rp$0,
     "versioned_polling_state_rpc.ml");
   var
    cst_3e367da4_b851_422a_b4b0_6a = "3e367da4-b851-422a-b4b0-6a1833eb941c",
    cst_db6dae4d_cb00_4727_ab1b_f0 = "db6dae4d-cb00-4727-ab1b-f0f34b37945c",
    cst_8266b996_7a30_436c_b045_00 = "8266b996-7a30-436c-b045-00c02f7f3db7",
    cst_versioned_polling_state_rp = cst_versioned_polling_state_rp$0,
    cst_Versioned_polling_state_rp = cst_Versioned_polling_state_rp$0;
   function Make_stable_query(Unstable, Stable, Conv){
    var
     equal = Unstable[1],
     caller_identity =
       caml_call1(Bin_shape[5][1], cst_8266b996_7a30_436c_b045_00),
     to_binable = Conv[1],
     of_binable = Conv[2],
     include =
       caml_call1
        (caml_call1
          (Core_Binable[2],
           [0, Stable[5], Stable[1], Stable[2], Stable[3], Stable[4]]),
         [0, to_binable, of_binable, caller_identity]),
     bin_size_t = include[1],
     bin_write_t = include[2],
     bin_read_t = include[3],
     bin_read_t$0 = include[4],
     bin_shape_t = include[5],
     bin_writer_t = include[6],
     bin_reader_t = include[7],
     bin_t = include[8];
    return [0,
            equal,
            bin_size_t,
            bin_write_t,
            bin_read_t,
            bin_read_t$0,
            bin_shape_t,
            bin_writer_t,
            bin_reader_t,
            bin_t];
   }
   function Make_stable_response(Unstable, Stable, Conv){
    var
     to_binable = Conv[1],
     of_binable = Conv[2],
     caller_identity =
       caml_call1(Bin_shape[5][1], cst_3e367da4_b851_422a_b4b0_6a),
     include =
       caml_call1
        (caml_call1
          (Core_Binable[2],
           [0, Stable[5], Stable[1], Stable[2], Stable[3], Stable[4]]),
         [0, to_binable, of_binable, caller_identity]),
     bin_size_t = include[1],
     bin_write_t = include[2],
     bin_read_t = include[3],
     bin_read_t$0 = include[4],
     bin_shape_t = include[5],
     bin_writer_t = include[6],
     bin_reader_t = include[7],
     bin_t = include[8],
     sexp_of_t = Unstable[1][1],
     to_binable$0 = Conv[3][1],
     of_binable$0 = Conv[3][2],
     caller_identity$0 =
       caml_call1(Bin_shape[5][1], cst_db6dae4d_cb00_4727_ab1b_f0),
     _e_ = Stable[10],
     include$0 =
       caml_call1
        (caml_call1
          (Core_Binable[2], [0, _e_[5], _e_[1], _e_[2], _e_[3], _e_[4]]),
         [0, to_binable$0, of_binable$0, caller_identity$0]),
     bin_size_t$0 = include$0[1],
     bin_write_t$0 = include$0[2],
     bin_read_t$1 = include$0[3],
     bin_read_t$2 = include$0[4],
     bin_shape_t$0 = include$0[5],
     bin_writer_t$0 = include$0[6],
     bin_reader_t$0 = include$0[7],
     bin_t$0 = include$0[8],
     diffs = Unstable[2],
     update = Unstable[3];
    return [0,
            bin_size_t,
            bin_write_t,
            bin_read_t,
            bin_read_t$0,
            bin_shape_t,
            bin_writer_t,
            bin_reader_t,
            bin_t,
            [0,
             bin_size_t$0,
             bin_write_t$0,
             bin_read_t$1,
             bin_read_t$2,
             bin_shape_t$0,
             bin_writer_t$0,
             bin_reader_t$0,
             bin_t$0,
             sexp_of_t],
            diffs,
            update];
   }
   function create_caller(rpc){
    function _c_(initial_query, param){
     return caml_call2(Polling_state_rpc[9][1], initial_query, rpc);
    }
    var _d_ = caml_call1(Polling_state_rpc[3], rpc);
    return caml_call2(Babel_Caller[25][1], _d_, _c_);
   }
   function negotiate_client(caller, initial_query, conn){
    var menu = caml_call1(Async_rpc_kernel_Versioned_rpc[2][4], conn);
    function _a_(f){
     var
      conn$0 = caml_call1(Async_rpc_kernel_Versioned_rpc[2][3], conn),
      creator = caml_call1(f, conn$0);
     return caml_call2(creator, initial_query, 0);
    }
    var _b_ = caml_call2(Babel_Caller[19], caller, menu);
    return caml_call2(Base_Or_error[28][4][3], _b_, _a_);
   }
   var Client = [0, create_caller, negotiate_client];
   caml_call1(Ppx_inline_test_lib[7], cst_versioned_polling_state_rp);
   caml_call1(Ppx_expect_runtime[1][2], 0);
   caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2], 0);
   caml_call1(Ppx_module_timer_runtime[5], cst_Versioned_polling_state_rp);
   var
    Versioned_polling_state_rpc =
      [0, Make_stable_query, Make_stable_response, Client];
   runtime.caml_register_global
    (20, Versioned_polling_state_rpc, cst_Versioned_polling_state_rp$0);
   return;
  }
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ2ZXJzaW9uZWRfcG9sbGluZ19zdGF0ZV9ycGMuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbImVxdWFsIiwiY2FsbGVyX2lkZW50aXR5IiwidG9fYmluYWJsZSIsIm9mX2JpbmFibGUiLCJzZXhwX29mX3QiLCJ0b19iaW5hYmxlJDAiLCJvZl9iaW5hYmxlJDAiLCJjYWxsZXJfaWRlbnRpdHkkMCIsImRpZmZzIiwidXBkYXRlIiwiY3JlYXRlX2NhbGxlciIsInJwYyIsImluaXRpYWxfcXVlcnkiLCJuZWdvdGlhdGVfY2xpZW50IiwiY2FsbGVyIiwiY29ubiIsIm1lbnUiLCJmIiwiY29ubiQwIiwiY3JlYXRvciJdLCJzb3VyY2VzIjpbIi9ob21lL2xpYW0tY2FycGVudGVyLy5vcGFtL3BlcnNvbmFsLXNpdGUvbGliL3ZlcnNpb25lZF9wb2xsaW5nX3N0YXRlX3JwYy92ZXJzaW9uZWRfcG9sbGluZ19zdGF0ZV9ycGNfXy5tbCIsIi9ob21lL2xpYW0tY2FycGVudGVyLy5vcGFtL3BlcnNvbmFsLXNpdGUvbGliL3ZlcnNpb25lZF9wb2xsaW5nX3N0YXRlX3JwYy92ZXJzaW9uZWRfcG9sbGluZ19zdGF0ZV9ycGNfaW50Zi5tbCIsIi9ob21lL2xpYW0tY2FycGVudGVyLy5vcGFtL3BlcnNvbmFsLXNpdGUvbGliL3ZlcnNpb25lZF9wb2xsaW5nX3N0YXRlX3JwYy92ZXJzaW9uZWRfcG9sbGluZ19zdGF0ZV9ycGMubWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7R0FLdUM7O0lBQUE7Ozs7O0U7Ozs7Ozs7Ozs7Ozs7Rzs7Ozs7Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dDRnhCLElBQUEsYUFzQkc7Ozs7Ozs7OztFOzs7Ozs7Ozs7Ozs7Rzs7Ozs7Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ1BSO0tBVFJBO0tBUVVDO09BQ0Y7S0FHRUM7S0FDQUM7Ozs7OzthQURBRCxZQUNBQyxZQUxBRjs7Ozs7Ozs7O0lBVHlCO1lBQ25DRDs7Ozs7Ozs7Ozs7SUFrQ1E7S0FKRUU7S0FDQUM7S0FFQUY7T0FDRjs7Ozs7O2FBSkVDLFlBQ0FDLFlBRUFGOzs7Ozs7Ozs7S0FNUkc7S0FRVUM7S0FDQUM7S0FFQUM7T0FDRjs7Ozs7O2FBSkVGLGNBQ0FDLGNBRUFDOzs7Ozs7Ozs7S0FNUkM7S0FDQUM7SUFwQzBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFrQjVDTDtZQWlCRUk7WUFDQUM7O1lBU0FDLGNBQWNDO2lCQUdSQztLQUFvQixPQUY1QixvQ0FFUUEsZUFIUUQ7SUFHOEQ7SUFENUUsVUFBQSxpQ0FGY0E7SUFHZCxPQUFBO0dBQTZFO1lBRzdFRSxpQkFBaUJDLFFBQVFGLGVBQWNHO0lBQzlCLElBQVBDLE9BQU8saURBRDhCRDtpQkFFeEJFO0tBQ2pCO01BQUlDLFNBQU8saURBSDhCSDtNQUlyQ0ksVUFBVSxXQUZHRixHQUNiQztLQUVKLE9BQUEsV0FESUMsU0FKdUJQO0lBS0Y7SUFISixVQUFBLDZCQUZGRSxRQUNmRTs7R0FJcUI7R0FqQmIsaUJBTVZOLGVBTUFHOzs7Ozs7Ozs7OztFIiwic291cmNlc0NvbnRlbnQiOlsiKCogZ2VuZXJhdGVkIGJ5IGR1bmUgKilcblxuKCoqIEBjYW5vbmljYWwgVmVyc2lvbmVkX3BvbGxpbmdfc3RhdGVfcnBjLlZlcnNpb25lZF9wb2xsaW5nX3N0YXRlX3JwY19pbnRmICopXG5tb2R1bGUgVmVyc2lvbmVkX3BvbGxpbmdfc3RhdGVfcnBjX2ludGYgPSBWZXJzaW9uZWRfcG9sbGluZ19zdGF0ZV9ycGNfX1ZlcnNpb25lZF9wb2xsaW5nX3N0YXRlX3JwY19pbnRmXG5cbm1vZHVsZSBWZXJzaW9uZWRfcG9sbGluZ19zdGF0ZV9ycGNfXyA9IHN0cnVjdCBlbmRcbltAQGRlcHJlY2F0ZWQgXCJ0aGlzIG1vZHVsZSBpcyBzaGFkb3dlZFwiXVxuIiwib3BlbiEgQ29yZVxub3BlbiEgQXN5bmNfcnBjX2tlcm5lbFxuXG5tb2R1bGUgUXVlcnkgPSBzdHJ1Y3RcbiAgbW9kdWxlIHR5cGUgVW5zdGFibGUgPSBzaWdcbiAgICB0eXBlIHQgW0BAZGVyaXZpbmcgZXF1YWxdXG4gIGVuZFxuXG4gIG1vZHVsZSB0eXBlIFN0YWJsZSA9IHNpZ1xuICAgIHR5cGUgdCBbQEBkZXJpdmluZyBiaW5faW8sIHN0YWJsZV93aXRuZXNzXVxuICBlbmRcblxuICBtb2R1bGUgdHlwZSBDb252ID0gc2lnXG4gICAgbW9kdWxlIFVuc3RhYmxlIDogVW5zdGFibGVcbiAgICBtb2R1bGUgU3RhYmxlIDogU3RhYmxlXG5cbiAgICB2YWwgdG9fc3RhYmxlIDogVW5zdGFibGUudCAtPiBTdGFibGUudFxuICAgIHZhbCBvZl9zdGFibGUgOiBTdGFibGUudCAtPiBVbnN0YWJsZS50XG4gIGVuZFxuXG4gIG1vZHVsZSB0eXBlIFMgPSBzaWdcbiAgICB0eXBlIHQgW0BAZGVyaXZpbmcgZXF1YWwsIGJpbl9pb11cbiAgZW5kXG5lbmRcblxubW9kdWxlIFJlc3BvbnNlID0gc3RydWN0XG4gIG1vZHVsZSB0eXBlIFVuc3RhYmxlID0gc2lnXG4gICAgKCoqIFRoaXMgaXMgbGlrZSBbUG9sbGluZ19zdGF0ZV9ycGMuUmVzcG9uc2VdIGJ1dCB0aGUgdHlwZXMgYXJlbid0IGJpbmFibGUgKilcbiAgICB0eXBlIHRcblxuICAgIG1vZHVsZSBVcGRhdGUgOiBzaWdcbiAgICAgIHR5cGUgdCBbQEBkZXJpdmluZyBzZXhwX29mXVxuICAgIGVuZFxuXG4gICAgdmFsIGRpZmZzIDogZnJvbTp0IC0+IHRvXzp0IC0+IFVwZGF0ZS50XG4gICAgdmFsIHVwZGF0ZSA6IHQgLT4gVXBkYXRlLnQgLT4gdFxuICBlbmRcblxuICBtb2R1bGUgdHlwZSBTdGFibGUgPSBzaWdcbiAgICB0eXBlIHQgW0BAZGVyaXZpbmcgYmluX2lvLCBzdGFibGVfd2l0bmVzc11cblxuICAgIG1vZHVsZSBVcGRhdGUgOiBzaWdcbiAgICAgIHR5cGUgdCBbQEBkZXJpdmluZyBiaW5faW8sIHN0YWJsZV93aXRuZXNzXVxuICAgIGVuZFxuICBlbmRcblxuICBtb2R1bGUgdHlwZSBDb252ID0gc2lnXG4gICAgbW9kdWxlIFVuc3RhYmxlIDogVW5zdGFibGVcbiAgICBtb2R1bGUgU3RhYmxlIDogU3RhYmxlXG5cbiAgICB2YWwgdG9fc3RhYmxlIDogVW5zdGFibGUudCAtPiBTdGFibGUudFxuICAgIHZhbCBvZl9zdGFibGUgOiBTdGFibGUudCAtPiBVbnN0YWJsZS50XG5cbiAgICBtb2R1bGUgVXBkYXRlIDogc2lnXG4gICAgICB2YWwgdG9fc3RhYmxlIDogVW5zdGFibGUuVXBkYXRlLnQgLT4gU3RhYmxlLlVwZGF0ZS50XG4gICAgICB2YWwgb2Zfc3RhYmxlIDogU3RhYmxlLlVwZGF0ZS50IC0+IFVuc3RhYmxlLlVwZGF0ZS50XG4gICAgZW5kXG4gIGVuZFxuXG4gIG1vZHVsZSB0eXBlIFMgPSBzaWdcbiAgICBtb2R1bGUgVW5zdGFibGUgOiBVbnN0YWJsZVxuXG4gICAgaW5jbHVkZVxuICAgICAgUG9sbGluZ19zdGF0ZV9ycGMuUmVzcG9uc2VcbiAgICAgICAgd2l0aCB0eXBlIHQgPSBVbnN0YWJsZS50XG4gICAgICAgICBhbmQgdHlwZSBVcGRhdGUudCA9IFVuc3RhYmxlLlVwZGF0ZS50XG4gIGVuZFxuZW5kXG5cbm1vZHVsZSB0eXBlIFZlcnNpb25lZF9wb2xsaW5nX3N0YXRlX3JwYyA9IHNpZ1xuICBtb2R1bGUgUXVlcnkgPSBRdWVyeVxuICBtb2R1bGUgUmVzcG9uc2UgPSBSZXNwb25zZVxuXG4gIG1vZHVsZSBNYWtlX3N0YWJsZV9xdWVyeVxuICAgIChVbnN0YWJsZSA6IFF1ZXJ5LlVuc3RhYmxlKVxuICAgIChTdGFibGUgOiBRdWVyeS5TdGFibGUpXG4gICAgKENvbnYgOiBRdWVyeS5Db252IHdpdGggbW9kdWxlIFVuc3RhYmxlIDo9IFVuc3RhYmxlIGFuZCBtb2R1bGUgU3RhYmxlIDo9IFN0YWJsZSkgOlxuICAgIFF1ZXJ5LlMgd2l0aCB0eXBlIHQgPSBVbnN0YWJsZS50XG5cbiAgKCoqIEhlcmUgaXMgaG93IFtNYWtlX3N0YWJsZV9yZXNwb25zZV0gd29ya3MsIGZyb20gdGhlIGNsaWVudCdzIHBlcnNwZWN0aXZlOlxuXG4gICAgICB7dlxuICAgICAg4pSM4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4pSQXG4gICAgICDilY4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVuc3RhYmxlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilY5cbiAgICAgIOKVjiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKVjlxuICAgICAg4pWOIOKUjOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUkCAgICAg4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSQICAgICDilIzilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJAgICAgIOKUjOKUgOKUgOKUgOKUgOKUgOKUgOKUkCAgICAg4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQIOKVjlxuICAgICAg4pWOIOKUgiBSZXNwb25zZSDilIIg4pSA4pSA4pa2IOKUgiBEaWZmIOKUgiDilIDilIDilrYg4pSCIFJlc3BvbnNlICDilIIg4pSA4pSA4pa2IOKUgiBEaWZmIOKUgiDilIDilIDilrYg4pSCIFJlc3BvbnNlIOKUgiDilY5cbiAgICAgIOKVjiDilJTilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilJggICAgIOKUlOKUgOKUgOKUgOKUgOKUgOKUgOKUmCAgICAg4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYICAgICDilJTilIDilIDilIDilIDilIDilIDilJggICAgIOKUlOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUmCDilY5cbiAgICAgIOKVjiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKVjlxuICAgICAg4pSU4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4oiS4pSYXG4gICAgICAgICAgICAgIOKWsiAgICAgICAgICAgICDilrIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDilrJcbiAgICAgICAgICAgICAg4pSCICAgICAgICAgICAgIOKUgiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKUglxuICAgICAgICAgICAgICDilIIgICAgICAgICAgICAg4pSCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pSCXG4gICAgICDilIziiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLilJBcbiAgICAgIOKVjiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RhYmxlIChWMSkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKVjlxuICAgICAg4pWOICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pWOXG4gICAgICDilY4g4pSM4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSQICAgICDilIzilIDilIDilIDilIDilIDilIDilJAgICAgICAgICAgICAgICAgICAgICAgIOKUjOKUgOKUgOKUgOKUgOKUgOKUgOKUkCAgICAgICAgICAgICAgICAgIOKVjlxuICAgICAg4pWOIOKUgiBSZXNwb25zZSDilIIgICAgIOKUgiBEaWZmIOKUgiAgICAgICAgICAgICAgICAgICAgICAg4pSCIERpZmYg4pSCICAgICAgICAgICAgICAgICAg4pWOXG4gICAgICDilY4g4pSU4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSYICAgICDilJTilIDilIDilIDilIDilIDilIDilJggICAgICAgICAgICAgICAgICAgICAgIOKUlOKUgOKUgOKUgOKUgOKUgOKUgOKUmCAgICAgICAgICAgICAgICAgIOKVjlxuICAgICAg4pWOICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4pWOXG4gICAgICDilJTiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLiiJLilJhcbiAgICAgIHZ9XG5cbiAgICAgIEltcG9ydGFudGx5LCBzdGFibGUgcmVzcG9uc2VzIGFuZCBkaWZmcyBhcmUgd2hhdCBnZXQgc2VudCBvdmVyIHRoZSB3aXJlLCBidXQgdGhleSBhcmVcbiAgICAgIGltbWVkaWF0ZWx5IGNvbnZlcnRlZCB0byB1bnN0YWJsZSByZXNwb25zZXMgYW5kIGRpZmZzIGJlZm9yZSBhcHBseWluZyB0aGUgZGlmZnMuICBUaGlzXG4gICAgICBwZXJmb3JtcyB3ZWxsIHdoZW4gdGhlIHJlc3BvbnNlcyBhcmUgbGFyZ2UgcmVsYXRpdmUgdG8gdGhlIGRpZmZzICh3aGljaCBpcyBleHBlY3RlZCB0b1xuICAgICAgYmUgdGhlIGNvbW1vbiBjYXNlKS4gIFNtYWxsIGRpZmZzIGFyZSBzZW50IG92ZXIgdGhlIHdpcmUsIGNvbnZlcnRlZCB0byB0aGUgdW5zdGFibGVcbiAgICAgIGRpZmYgdHlwZSwgYW5kIHRoZW4gYXBwbGllZCB0byB0aGUgcHJldmlvdXMgKHBvc3NpYmx5IHZlcnkgbGFyZ2UpIHJlc3BvbnNlLiAqKVxuICBtb2R1bGUgTWFrZV9zdGFibGVfcmVzcG9uc2VcbiAgICAoVW5zdGFibGUgOiBSZXNwb25zZS5VbnN0YWJsZSlcbiAgICAoU3RhYmxlIDogUmVzcG9uc2UuU3RhYmxlKVxuICAgIChDb252IDogUmVzcG9uc2UuQ29udiB3aXRoIG1vZHVsZSBVbnN0YWJsZSA6PSBVbnN0YWJsZSBhbmQgbW9kdWxlIFN0YWJsZSA6PSBTdGFibGUpIDpcbiAgICBSZXNwb25zZS5TIHdpdGggbW9kdWxlIFVuc3RhYmxlIDo9IFVuc3RhYmxlXG5cbiAgbW9kdWxlIENsaWVudCA6IHNpZ1xuICAgICgqKiBBIFsoJ3F1ZXJ5LCAncmVzcG9uc2UpIGNhbGxlcl0gcmVwcmVzZW50cyBhIG5vbmVtcHR5IGxpc3Qgb2YgY3JlYXRvciBmdW5jdGlvbnMsXG4gICAgICAgIGVhY2ggcmVwcmVzZW50aW5nIGEgc2luZ2xlIFBvbGxpbmdfc3RhdGVfcnBjLnQuICopXG4gICAgdHlwZSAoJ3F1ZXJ5LCAncmVzcG9uc2UpIGNhbGxlciA9XG4gICAgICAoP2luaXRpYWxfcXVlcnk6J3F1ZXJ5IC0+IHVuaXQgLT4gKCdxdWVyeSwgJ3Jlc3BvbnNlKSBQb2xsaW5nX3N0YXRlX3JwYy5DbGllbnQudClcbiAgICAgIEJhYmVsLkNhbGxlci50XG5cbiAgICAoKiogQ3JlYXRlIGEgW2NhbGxlcl0gZnJvbSBhIHNpbmdsZSBQb2xsaW5nX3N0YXRlX3JwYy50LiAgQ2FsbGVycyBjYW4gYmUgY29tYmluZWQgaW5cbiAgICAgICAgdGhlIHR5cGljYWwgYmFiZWwgd2F5LCBlLmcuIHVzaW5nIFtCYWJlbC5DYWxsZXIub2ZfbGlzdF9kZWNyZWFzaW5nX3ByZWZlcmVuY2VdLiAqKVxuICAgIHZhbCBjcmVhdGVfY2FsbGVyXG4gICAgICA6ICAoJ3F1ZXJ5LCAncmVzcG9uc2UpIFBvbGxpbmdfc3RhdGVfcnBjLnRcbiAgICAgIC0+ICgncXVlcnksICdyZXNwb25zZSkgY2FsbGVyXG5cbiAgICAoKiogVGhpcyBmdW5jdGlvbiB3aWxsIHVzZSB0aGUgbWVudSBlbWJlZGRlZCBpbiBbVmVyc2lvbmVkX3JwYy5Db25uZWN0aW9uX3dpdGhfbWVudV1cbiAgICAgICAgdG8gY2hvb3NlIHRoZSBtb3N0IHVwLXRvLWRhdGUgUG9sbGluZ19zdGF0ZV9ycGMudCB0aGF0IGJvdGggeW91IGFuZCB0aGUgc2VydmVyXG4gICAgICAgIGtub3cgYW5kIHdpbGwgdXNlIHRoYXQgUG9sbGluZ19zdGF0ZV9ycGMudCB1bmRlciB0aGUgaG9vZC4gKilcbiAgICB2YWwgbmVnb3RpYXRlX2NsaWVudFxuICAgICAgOiAgKCdxdWVyeSwgJ3Jlc3BvbnNlKSBjYWxsZXJcbiAgICAgIC0+ID9pbml0aWFsX3F1ZXJ5OidxdWVyeVxuICAgICAgLT4gVmVyc2lvbmVkX3JwYy5Db25uZWN0aW9uX3dpdGhfbWVudS50XG4gICAgICAtPiAoJ3F1ZXJ5LCAncmVzcG9uc2UpIFBvbGxpbmdfc3RhdGVfcnBjLkNsaWVudC50IE9yX2Vycm9yLnRcbiAgZW5kXG5lbmRcbiIsIm9wZW4hIENvcmVcbm9wZW4hIEFzeW5jX3JwY19rZXJuZWxcbmluY2x1ZGUgVmVyc2lvbmVkX3BvbGxpbmdfc3RhdGVfcnBjX2ludGZcblxubW9kdWxlIE1ha2Vfc3RhYmxlX3F1ZXJ5XG4gIChVbnN0YWJsZSA6IFF1ZXJ5LlVuc3RhYmxlKVxuICAoU3RhYmxlIDogUXVlcnkuU3RhYmxlKVxuICAoQ29udiA6IFF1ZXJ5LkNvbnYgd2l0aCBtb2R1bGUgVW5zdGFibGUgOj0gVW5zdGFibGUgYW5kIG1vZHVsZSBTdGFibGUgOj0gU3RhYmxlKSA6XG4gIFF1ZXJ5LlMgd2l0aCB0eXBlIHQgPSBVbnN0YWJsZS50ID0gc3RydWN0XG4gIHR5cGUgdCA9IFVuc3RhYmxlLnQgW0BAZGVyaXZpbmcgZXF1YWxdXG5cbiAgaW5jbHVkZVxuICAgIEJpbmFibGUuT2ZfYmluYWJsZV93aXRoX3V1aWRcbiAgICAgIChTdGFibGUpXG4gICAgICAoc3RydWN0XG4gICAgICAgIHR5cGUgdCA9IFVuc3RhYmxlLnRcblxuICAgICAgICBsZXQgY2FsbGVyX2lkZW50aXR5ID1cbiAgICAgICAgICBCaW5fcHJvdC5TaGFwZS5VdWlkLm9mX3N0cmluZyB7fDgyNjZiOTk2LTdhMzAtNDM2Yy1iMDQ1LTAwYzAyZjdmM2RiN3x9XG4gICAgICAgIDs7XG5cbiAgICAgICAgbGV0IHRvX2JpbmFibGUgPSBDb252LnRvX3N0YWJsZVxuICAgICAgICBsZXQgb2ZfYmluYWJsZSA9IENvbnYub2Zfc3RhYmxlXG4gICAgICBlbmQpXG5lbmRcblxubW9kdWxlIE1ha2Vfc3RhYmxlX3Jlc3BvbnNlXG4gIChVbnN0YWJsZSA6IFJlc3BvbnNlLlVuc3RhYmxlKVxuICAoU3RhYmxlIDogUmVzcG9uc2UuU3RhYmxlKVxuICAoQ29udiA6IFJlc3BvbnNlLkNvbnYgd2l0aCBtb2R1bGUgVW5zdGFibGUgOj0gVW5zdGFibGUgYW5kIG1vZHVsZSBTdGFibGUgOj0gU3RhYmxlKSA6XG4gIFJlc3BvbnNlLlMgd2l0aCBtb2R1bGUgVW5zdGFibGUgOj0gVW5zdGFibGUgPSBzdHJ1Y3RcbiAgdHlwZSB0ID0gVW5zdGFibGUudFxuXG4gIGluY2x1ZGVcbiAgICBCaW5hYmxlLk9mX2JpbmFibGVfd2l0aF91dWlkXG4gICAgICAoU3RhYmxlKVxuICAgICAgKHN0cnVjdFxuICAgICAgICB0eXBlIHQgPSBVbnN0YWJsZS50XG5cbiAgICAgICAgbGV0IHRvX2JpbmFibGUgPSBDb252LnRvX3N0YWJsZVxuICAgICAgICBsZXQgb2ZfYmluYWJsZSA9IENvbnYub2Zfc3RhYmxlXG5cbiAgICAgICAgbGV0IGNhbGxlcl9pZGVudGl0eSA9XG4gICAgICAgICAgQmluX3Byb3QuU2hhcGUuVXVpZC5vZl9zdHJpbmcge3wzZTM2N2RhNC1iODUxLTQyMmEtYjRiMC02YTE4MzNlYjk0MWN8fVxuICAgICAgICA7O1xuICAgICAgZW5kKVxuXG4gIG1vZHVsZSBVcGRhdGUgPSBzdHJ1Y3RcbiAgICB0eXBlIHQgPSBVbnN0YWJsZS5VcGRhdGUudCBbQEBkZXJpdmluZyBzZXhwX29mXVxuXG4gICAgaW5jbHVkZVxuICAgICAgQmluYWJsZS5PZl9iaW5hYmxlX3dpdGhfdXVpZFxuICAgICAgICAoU3RhYmxlLlVwZGF0ZSlcbiAgICAgICAgKHN0cnVjdFxuICAgICAgICAgIHR5cGUgdCA9IFVuc3RhYmxlLlVwZGF0ZS50XG5cbiAgICAgICAgICBsZXQgdG9fYmluYWJsZSA9IENvbnYuVXBkYXRlLnRvX3N0YWJsZVxuICAgICAgICAgIGxldCBvZl9iaW5hYmxlID0gQ29udi5VcGRhdGUub2Zfc3RhYmxlXG5cbiAgICAgICAgICBsZXQgY2FsbGVyX2lkZW50aXR5ID1cbiAgICAgICAgICAgIEJpbl9wcm90LlNoYXBlLlV1aWQub2Zfc3RyaW5nIHt8ZGI2ZGFlNGQtY2IwMC00NzI3LWFiMWItZjBmMzRiMzc5NDVjfH1cbiAgICAgICAgICA7O1xuICAgICAgICBlbmQpXG4gIGVuZFxuXG4gIGxldCBkaWZmcyA9IFVuc3RhYmxlLmRpZmZzXG4gIGxldCB1cGRhdGUgPSBVbnN0YWJsZS51cGRhdGVcbmVuZFxuXG5tb2R1bGUgQ2xpZW50ID0gc3RydWN0XG4gIHR5cGUgKCdxdWVyeSwgJ3Jlc3BvbnNlKSBjcmVhdG9yID1cbiAgICA/aW5pdGlhbF9xdWVyeToncXVlcnkgLT4gdW5pdCAtPiAoJ3F1ZXJ5LCAncmVzcG9uc2UpIFBvbGxpbmdfc3RhdGVfcnBjLkNsaWVudC50XG5cbiAgdHlwZSAoJ3F1ZXJ5LCAncmVzcG9uc2UpIGNhbGxlciA9ICgncXVlcnksICdyZXNwb25zZSkgY3JlYXRvciBCYWJlbC5DYWxsZXIudFxuXG4gIGxldCBjcmVhdGVfY2FsbGVyIHJwYyA9XG4gICAgQmFiZWwuQ2FsbGVyLkV4cGVydC5yZXR1cm5cbiAgICAgIChQb2xsaW5nX3N0YXRlX3JwYy5iYWJlbF9nZW5lcmljX3JwYyBycGMpXG4gICAgICAoZnVuID9pbml0aWFsX3F1ZXJ5ICgpIC0+IFBvbGxpbmdfc3RhdGVfcnBjLkNsaWVudC5jcmVhdGUgP2luaXRpYWxfcXVlcnkgcnBjKVxuICA7O1xuXG4gIGxldCBuZWdvdGlhdGVfY2xpZW50IGNhbGxlciA/aW5pdGlhbF9xdWVyeSBjb25uID1cbiAgICBsZXQgbWVudSA9IFZlcnNpb25lZF9ycGMuQ29ubmVjdGlvbl93aXRoX21lbnUubWVudSBjb25uIGluXG4gICAgbGV0JW1hcC5Pcl9lcnJvciBmID0gQmFiZWwuQ2FsbGVyLnRvX2Rpc3BhdGNoX2Z1biBjYWxsZXIgbWVudSBpblxuICAgIGxldCBjb25uID0gVmVyc2lvbmVkX3JwYy5Db25uZWN0aW9uX3dpdGhfbWVudS5jb25uZWN0aW9uIGNvbm4gaW5cbiAgICBsZXQgY3JlYXRvciA9IGYgY29ubiBpblxuICAgIGNyZWF0b3IgP2luaXRpYWxfcXVlcnkgKClcbiAgOztcbmVuZFxuIl19
