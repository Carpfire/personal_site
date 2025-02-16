// Generated by js_of_ocaml
//# buildInfo:effects=false, kind=cma, use-js-string=true, version=5.6.0

//# unitInfo: Provides: Uopt
//# unitInfo: Requires: Base, Base__Bool, Base__Option, Base__Sexpable, Inline_test_config, Ppx_bench_lib__Benchmark_accumulator, Ppx_expect_runtime, Ppx_inline_test_lib, Ppx_module_timer_runtime
(function
  (globalThis){
   "use strict";
   var
    runtime = globalThis.jsoo_runtime,
    cst_Uopt$0 = "Uopt",
    cst_Uopt_none$0 = "Uopt.none",
    cst_src_uopt_ml$1 = "src/uopt.ml",
    cst_uopt$0 = "uopt";
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
   function caml_call8(f, a0, a1, a2, a3, a4, a5, a6, a7){
    return (f.l >= 0 ? f.l : f.l = f.length) == 8
            ? f(a0, a1, a2, a3, a4, a5, a6, a7)
            : runtime.caml_call_gen(f, [a0, a1, a2, a3, a4, a5, a6, a7]);
   }
   var
    global_data = runtime.caml_get_global_data(),
    none = cst_Uopt_none$0,
    cst = "",
    Base = global_data.Base,
    Inline_test_config = global_data.Inline_test_config,
    Ppx_inline_test_lib = global_data.Ppx_inline_test_lib,
    Ppx_module_timer_runtime = global_data.Ppx_module_timer_runtime,
    Ppx_bench_lib_Benchmark_accumu =
      global_data.Ppx_bench_lib__Benchmark_accumulator,
    Ppx_expect_runtime = global_data.Ppx_expect_runtime,
    Base_Option = global_data.Base__Option,
    Base_Sexpable = global_data.Base__Sexpable;
   caml_call1(Ppx_module_timer_runtime[4], cst_Uopt$0);
   caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1], cst_uopt$0);
   caml_call1(Ppx_expect_runtime[1][1], cst_src_uopt_ml$1);
   caml_call2(Ppx_inline_test_lib[6], cst_uopt$0, "uopt.ml");
   var
    cst_Uopt_none = cst_Uopt_none$0,
    cst_should_not_have_gotten_to_ = "should not have gotten to this point",
    cst_src_uopt_ml = cst_src_uopt_ml$1,
    _b_ = [0, "no-js", 0],
    cst_using_the_same_sentinel_va = "using the same sentinel value",
    cst_Uopt_value_exn = "Uopt.value_exn",
    cst_Uopt_Local_some_Uopt_none = "Uopt.Local.some Uopt.none",
    cst_Uopt_some_Uopt_none = "Uopt.some Uopt.none",
    cst_src_uopt_ml$0 = cst_src_uopt_ml$1,
    cst_uopt = cst_uopt$0,
    cst_Uopt = cst_Uopt$0;
   function some(x){
    if(x === cst_Uopt_none$0) caml_call1(Base[244], cst_Uopt_some_Uopt_none);
    return x;
   }
   function some_local(x){
    if(x === cst_Uopt_none$0)
     caml_call1(Base[244], cst_Uopt_Local_some_Uopt_none);
    return x;
   }
   function unsafe_value(_g_){return _g_;}
   function unsafe_value_local(_f_){return _f_;}
   function is_none(t){return t === cst_Uopt_none$0 ? 1 : 0;}
   function is_some(t){return 1 - (t === cst_Uopt_none$0 ? 1 : 0);}
   function invariant(invariant_a, t){
    var _e_ = is_some(t);
    return _e_ ? caml_call1(invariant_a, t) : _e_;
   }
   function value_exn(t){
    return t === cst_Uopt_none$0
            ? caml_call1(Base[244], cst_Uopt_value_exn)
            : t;
   }
   function value(t, default$0){
    return runtime.caml_csel_value
            (t === cst_Uopt_none$0 ? 1 : 0, default$0, t);
   }
   function value_local(t, default$0){
    return runtime.caml_csel_value
            (t === cst_Uopt_none$0 ? 1 : 0, default$0, t);
   }
   function some_if(cond, x){
    return runtime.caml_csel_value(cond, some(x), cst_Uopt_none$0);
   }
   function some_if_local(cond, x){
    return runtime.caml_csel_value(cond, some_local(x), cst_Uopt_none$0);
   }
   function to_option(t){return t === cst_Uopt_none$0 ? 0 : [0, t];}
   function to_option_local(t){
    return runtime.caml_csel_value(t === cst_Uopt_none$0 ? 1 : 0, 0, [0, t]);
   }
   function of_option_local(opt){
    if(! opt) return none;
    var x = opt[1];
    return some_local(x);
   }
   function of_option(opt){
    if(! opt) return none;
    var a = opt[1];
    return some(a);
   }
   var
    include =
      caml_call1
       (caml_call1(Base_Sexpable[2], [0, Base_Option[9], Base_Option[10]]),
        [0, to_option, of_option]),
    t_of_sexp = include[1],
    sexp_of_t = include[2],
    Optional_syntax = [0, is_none, unsafe_value],
    Optional_syntax$0 = [0, Optional_syntax],
    Optional_syntax$1 = [0, is_none, unsafe_value_local],
    Optional_syntax$2 = [0, Optional_syntax$1];
   function globalize(globalize_a, ppx_optional_e_0){
    if(caml_call1(Optional_syntax$2[1][1], ppx_optional_e_0)) return none;
    var x = caml_call1(Optional_syntax$2[1][2], ppx_optional_e_0);
    return some(caml_call1(globalize_a, x));
   }
   function _a_(param){
    function _c_(param){
     a:
     {
      try{some(cst_Uopt_none);}catch(_d_){break a;}
      caml_call1(Base[244], cst_should_not_have_gotten_to_);
     }
     return 0;
    }
    caml_call8
     (Ppx_inline_test_lib[9],
      Inline_test_config,
      cst_using_the_same_sentinel_va,
      _b_,
      cst_src_uopt_ml,
      102,
      4,
      203,
      _c_);
    return 0;
   }
   caml_call8
    (Ppx_inline_test_lib[10],
     Inline_test_config,
     cst,
     0,
     cst_src_uopt_ml$0,
     100,
     0,
     253,
     _a_);
   caml_call1(Ppx_inline_test_lib[7], cst_uopt);
   caml_call1(Ppx_expect_runtime[1][2], 0);
   caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2], 0);
   caml_call1(Ppx_module_timer_runtime[5], cst_Uopt);
   var
    Uopt =
      [0,
       t_of_sexp,
       sexp_of_t,
       globalize,
       invariant,
       none,
       some,
       is_none,
       is_some,
       value_exn,
       value,
       some_if,
       unsafe_value,
       to_option,
       of_option,
       Optional_syntax$0,
       [0,
        some_local,
        value_local,
        some_if_local,
        unsafe_value_local,
        to_option_local,
        of_option_local,
        Optional_syntax$2]];
   runtime.caml_register_global(26, Uopt, cst_Uopt$0);
   return;
  }
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ1b3B0LmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6WyJub25lIiwic29tZSIsIngiLCJzb21lX2xvY2FsIiwidW5zYWZlX3ZhbHVlIiwidW5zYWZlX3ZhbHVlX2xvY2FsIiwiaXNfbm9uZSIsInQiLCJpc19zb21lIiwiaW52YXJpYW50IiwiaW52YXJpYW50X2EiLCJ2YWx1ZV9leG4iLCJ2YWx1ZSIsImRlZmF1bHQkMCIsInZhbHVlX2xvY2FsIiwic29tZV9pZiIsImNvbmQiLCJzb21lX2lmX2xvY2FsIiwidG9fb3B0aW9uIiwidG9fb3B0aW9uX2xvY2FsIiwib2Zfb3B0aW9uX2xvY2FsIiwib3B0Iiwib2Zfb3B0aW9uIiwiYSIsImdsb2JhbGl6ZSIsImdsb2JhbGl6ZV9hIiwicHB4X29wdGlvbmFsX2VfMCJdLCJzb3VyY2VzIjpbIi9ob21lL2xpYW0tY2FycGVudGVyLy5vcGFtL3BlcnNvbmFsLXNpdGUvbGliL3VvcHQvdW9wdC5tbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Rzs7Ozs7Rzs7Ozs7Rzs7Ozs7OztJQVNJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRVNDLEtBQ1BDO0lBQUosR0FBSUEsdUJBQ3NCO0lBQUEsT0FEdEJBO0dBRUg7WUFHVUMsV0FDUEQ7SUFBSixHQUFJQTtLQUNzQjtJQUFBLE9BRHRCQTtHQUVIO1lBR0NFLGtCO1lBQ0FDLHdCO1lBQ1NDLFFBQVFDLEdBQUksT0FBSkEsOEJBQXFCO1lBQzdCQyxRQUFRRCxHQUFJLFlBQUpBLCtCQUFtQjtZQUMzQkUsVUFBVUMsYUFBWUg7SUFBTyxVQUQ3QkMsUUFDc0JEO0lBQU8sYUFBMkIsV0FBOUNHLGFBQVlIO0dBQWtEO1lBQ3hFSSxVQUFVSjtJQUFJLE9BQUpBO2NBQXNCO2NBQXRCQTtHQUFtRTtZQUM3RUssTUFBTUwsR0FBR007SUFBVSxPQUFBO2FBQWJOLCtCQUFHTSxXQUFITjtHQUE2RDtZQUVuRU8sWUFBWVAsR0FBR007SUFDMUIsT0FBQTthQUR1Qk4sK0JBQUdNLFdBQUhOO0dBQytCO1lBRzNDUSxRQUFRQyxNQUFLZDtJQUFJLE9BQUEsd0JBQVRjLE1BeEJSZixLQXdCYUM7R0FBa0M7WUFDL0NlLGNBQWNELE1BQUtkO0lBQUksT0FBQSx3QkFBVGMsTUFuQmRiLFdBbUJtQkQ7R0FBd0M7WUFLM0RnQixVQUFVWCxHQUFJLE9BQUpBLGdDQUFBQSxHQUFxRDtZQUUvRFksZ0JBQWdCWjtJQUMzQixPQUFBLHdCQUQyQkEsc0NBQUFBO0dBQytCO1lBRy9DYSxnQkFBZ0JDO0lBQzNCLEtBRDJCQSxZQXRDekJyQjtRQXlDS0UsSUFIb0JtQjtJQUdmLE9BakNEbEIsV0FpQ0pEO0dBQWlCO1lBR2JvQixVQUFVRDtJQUNyQixLQURxQkEsWUE1Q25CckI7UUErQ0t1QixJQUhjRjtJQUdULE9BN0NEcEIsS0E2Q0pzQjtHQUFXO0dBZU87Ozs7WUE5QmRMLFdBWUFJOzs7SUFrQmMsc0JBOUNkaEIsU0FGVEY7SUErQ3FCO0lBZ0JJLHdCQTdEaEJFLFNBRFREO0lBNkR1QjtZQVF2Qm1CLFVBQVVDLGFBQ1NDO0ksdUNBQUFBLDBCQXJGbkIxQjtRQXVGS0Usd0NBRmN3QjtJQUVKLE9BckZOekIsS0FxRk0sV0FITHdCLGFBR0x2Qjs7OztLOztVQXJGSUQ7TUE0RmE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BVnRCdUI7T0FsRVNmO09BbEJUVDtPQUVTQztPQWNBSztPQUNBRTtPQUVBRztPQUNBQztPQU1BRztPQVpUWDtPQWtCU2M7T0FZQUk7OztRQXBDQW5CO1FBY0FXO1FBS0FHO1FBWlRaO1FBbUJTYztRQUlBQzs7OztFIiwic291cmNlc0NvbnRlbnQiOlsib3BlbiBCYXNlXG5tb2R1bGUgT2JqID0gU3RkbGliLk9ialxubW9kdWxlIE9ial9sb2NhbCA9IEJhc2UuRXhwb3J0ZWRfZm9yX3NwZWNpZmljX3VzZXMuT2JqX2xvY2FsXG5cbnR5cGUgKydhIHRcblxuKCogVGhpcyBbT2JqLm1hZ2ljXSBpcyBPSyBiZWNhdXNlIHdlIG5ldmVyIGFsbG93IHVzZXIgY29kZSBhY2Nlc3MgdG8gW25vbmVdIChleGNlcHQgdmlhXG4gICBbdW5zYWZlX3ZhbHVlXSkuICBXZSBkaXNhbGxvdyBbXyBVb3B0LnQgVW9wdC50XSwgc28gdGhlcmUgaXMgbm8gY2hhbmNlIG9mIGNvbmZ1c2luZ1xuICAgW25vbmVdIHdpdGggW3NvbWUgbm9uZV0uICBBbmQgW2Zsb2F0IFVvcHQudCBhcnJheV0gaXMgc2ltaWxhcmx5IGRpc2FsbG93ZWQuICopXG5sZXQgbm9uZSA6IF8gdCA9IE9iai5tYWdpYyBcIlVvcHQubm9uZVwiXG5cbmxldFtAaW5saW5lXSBzb21lICh4IDogJ2EpID1cbiAgbGV0IHIgOiAnYSB0ID0gT2JqLm1hZ2ljIHggaW5cbiAgaWYgcGh5c19lcXVhbCByIG5vbmUgdGhlbiBmYWlsd2l0aCBcIlVvcHQuc29tZSBVb3B0Lm5vbmVcIjtcbiAgclxuOztcblxubGV0W0BpbmxpbmVdIHNvbWVfbG9jYWwgKHR5cGUgYSkgKHggOiBhKSA6IGEgdCA9XG4gIGxldCByIDogYSB0ID0gT2JqX2xvY2FsLm1hZ2ljIHggaW5cbiAgaWYgcGh5c19lcXVhbCByIG5vbmUgdGhlbiBmYWlsd2l0aCBcIlVvcHQuTG9jYWwuc29tZSBVb3B0Lm5vbmVcIjtcbiAgclxuOztcblxubGV0IHVuc2FmZV92YWx1ZSA6ICdhIHQgLT4gJ2EgPSBPYmoubWFnaWNcbmxldCB1bnNhZmVfdmFsdWVfbG9jYWwgOiAnYSB0IC0+ICdhID0gT2JqX2xvY2FsLm1hZ2ljXG5sZXRbQGlubGluZV0gaXNfbm9uZSB0ID0gcGh5c19lcXVhbCB0IG5vbmVcbmxldFtAaW5saW5lXSBpc19zb21lIHQgPSBub3QgKGlzX25vbmUgdClcbmxldFtAaW5saW5lXSBpbnZhcmlhbnQgaW52YXJpYW50X2EgdCA9IGlmIGlzX3NvbWUgdCB0aGVuIGludmFyaWFudF9hICh1bnNhZmVfdmFsdWUgdClcbmxldFtAaW5saW5lXSB2YWx1ZV9leG4gdCA9IGlmIGlzX25vbmUgdCB0aGVuIGZhaWx3aXRoIFwiVW9wdC52YWx1ZV9leG5cIiBlbHNlIHVuc2FmZV92YWx1ZSB0XG5sZXRbQGlubGluZV0gdmFsdWUgdCB+ZGVmYXVsdCA9IEJvb2wuc2VsZWN0IChpc19ub25lIHQpIGRlZmF1bHQgKHVuc2FmZV92YWx1ZSB0KVxuXG5sZXRbQGlubGluZV0gdmFsdWVfbG9jYWwgdCB+ZGVmYXVsdCA9XG4gIEJvb2wuc2VsZWN0IChpc19ub25lIHQpIGRlZmF1bHQgKHVuc2FmZV92YWx1ZV9sb2NhbCB0KVxuOztcblxubGV0W0BpbmxpbmVdIHNvbWVfaWYgY29uZCB4ID0gQm9vbC5zZWxlY3QgY29uZCAoc29tZSB4KSBub25lXG5sZXRbQGlubGluZV0gc29tZV9pZl9sb2NhbCBjb25kIHggPSBCb29sLnNlbGVjdCBjb25kIChzb21lX2xvY2FsIHgpIG5vbmVcblxuKCogW3RvX29wdGlvbl0gcHJpb3JpdGl6ZXMgbm90IGFsbG9jYXRpbmcgaW4gdGhlIFtOb25lXSBjYXNlLiBBbGxvY2F0aW9uIGlzIGZhciBjaGVhcGVyXG4gICBmb3IgW3RvX29wdGlvbl9sb2NhbF0sIHNvIGl0IGluc3RlYWQgcHJpb3JpdGl6ZXMgbWluaW1pemluZyB1bnByZWRpY3RhYmxlIGJyYW5jaGVzLiAqKVxuXG5sZXRbQGlubGluZV0gdG9fb3B0aW9uIHQgPSBpZiBpc19ub25lIHQgdGhlbiBOb25lIGVsc2UgU29tZSAodW5zYWZlX3ZhbHVlIHQpXG5cbmxldFtAaW5saW5lXSB0b19vcHRpb25fbG9jYWwgdCA9XG4gIEJvb2wuc2VsZWN0IChpc19ub25lIHQpIE5vbmUgKFNvbWUgKHVuc2FmZV92YWx1ZV9sb2NhbCB0KSlcbjs7XG5cbmxldFtAaW5saW5lXSBvZl9vcHRpb25fbG9jYWwgb3B0ID1cbiAgbWF0Y2ggb3B0IHdpdGhcbiAgfCBOb25lIC0+IG5vbmVcbiAgfCBTb21lIHggLT4gc29tZV9sb2NhbCB4XG47O1xuXG5sZXRbQGlubGluZV0gb2Zfb3B0aW9uIG9wdCA9XG4gIG1hdGNoIG9wdCB3aXRoXG4gIHwgTm9uZSAtPiBub25lXG4gIHwgU29tZSBhIC0+IHNvbWUgYVxuOztcblxuKCogTm90ZSBbc2V4cF9vZl90XSBhbmQgW3Rfb2Zfc2V4cF0gbXVzdCByZW1haW4gc3RhYmxlOyBzZWUgW1VvcHRfY29yZS5TdGFibGVdLiAqKVxuaW5jbHVkZVxuICBTZXhwYWJsZS5PZl9zZXhwYWJsZTFcbiAgICAoT3B0aW9uKVxuICAgIChzdHJ1Y3RcbiAgICAgIHR5cGUgbm9ucmVjICdhIHQgPSAnYSB0XG5cbiAgICAgIGxldCB0b19zZXhwYWJsZSA9IHRvX29wdGlvblxuICAgICAgbGV0IG9mX3NleHBhYmxlID0gb2Zfb3B0aW9uXG4gICAgZW5kKVxuXG5tb2R1bGUgT3B0aW9uYWxfc3ludGF4ID0gc3RydWN0XG4gIG1vZHVsZSBPcHRpb25hbF9zeW50YXggPSBzdHJ1Y3RcbiAgICBsZXQgaXNfbm9uZSA9IGlzX25vbmVcbiAgICBsZXQgdW5zYWZlX3ZhbHVlID0gdW5zYWZlX3ZhbHVlXG4gIGVuZFxuZW5kXG5cbm1vZHVsZSBMb2NhbCA9IHN0cnVjdFxuICBsZXQgc29tZSA9IHNvbWVfbG9jYWxcbiAgbGV0IHVuc2FmZV92YWx1ZSA9IHVuc2FmZV92YWx1ZV9sb2NhbFxuICBsZXQgdmFsdWUgPSB2YWx1ZV9sb2NhbFxuICBsZXQgc29tZV9pZiA9IHNvbWVfaWZfbG9jYWxcbiAgbGV0IHRvX29wdGlvbiA9IHRvX29wdGlvbl9sb2NhbFxuICBsZXQgb2Zfb3B0aW9uID0gb2Zfb3B0aW9uX2xvY2FsXG5cbiAgbW9kdWxlIE9wdGlvbmFsX3N5bnRheCA9IHN0cnVjdFxuICAgIG1vZHVsZSBPcHRpb25hbF9zeW50YXggPSBzdHJ1Y3RcbiAgICAgIGxldCBpc19ub25lID0gaXNfbm9uZVxuICAgICAgbGV0IHVuc2FmZV92YWx1ZSA9IHVuc2FmZV92YWx1ZV9sb2NhbFxuICAgIGVuZFxuICBlbmRcbmVuZFxuXG5sZXQgZ2xvYmFsaXplIGdsb2JhbGl6ZV9hIHQgPVxuICBtYXRjaCVvcHRpb25hbC5Mb2NhbCB0IHdpdGhcbiAgfCBOb25lIC0+IG5vbmVcbiAgfCBTb21lIHggLT4gc29tZSAoZ2xvYmFsaXplX2EgeClcbjs7XG5cbmxldCV0ZXN0X21vZHVsZSBfID1cbiAgKG1vZHVsZSBzdHJ1Y3RcbiAgICBsZXQldGVzdF91bml0IChcInVzaW5nIHRoZSBzYW1lIHNlbnRpbmVsIHZhbHVlXCIgW0B0YWdzIFwibm8tanNcIl0pID1cbiAgICAgIG1hdGNoIHNvbWUgXCJVb3B0Lm5vbmVcIiB3aXRoXG4gICAgICB8IChfIDogc3RyaW5nIHQpIC0+IGZhaWx3aXRoIFwic2hvdWxkIG5vdCBoYXZlIGdvdHRlbiB0byB0aGlzIHBvaW50XCJcbiAgICAgIHwgZXhjZXB0aW9uIF8gLT4gKClcbiAgICA7O1xuICBlbmQpXG47O1xuIl19
