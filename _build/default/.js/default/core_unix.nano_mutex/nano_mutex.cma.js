// Generated by js_of_ocaml
//# buildInfo:effects=false, kind=cma, use-js-string=true, version=5.6.0

//# unitInfo: Provides: Nano_mutex__
(function
  (globalThis){
   "use strict";
   var
    runtime = globalThis.jsoo_runtime,
    Nano_mutex = [0],
    Nano_mutex$0 = [0, Nano_mutex];
   runtime.caml_register_global(0, Nano_mutex$0, "Nano_mutex__");
   return;
  }
  (globalThis));

//# unitInfo: Provides: Nano_mutex__Import
//# unitInfo: Requires: Ppx_bench_lib__Benchmark_accumulator, Ppx_expect_runtime, Ppx_inline_test_lib, Ppx_module_timer_runtime
(function
  (globalThis){
   "use strict";
   var
    runtime = globalThis.jsoo_runtime,
    cst_Nano_mutex_Import = "Nano_mutex__Import",
    cst_nano_mutex = "nano_mutex";
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
   caml_call1(Ppx_module_timer_runtime[4], cst_Nano_mutex_Import);
   caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1], cst_nano_mutex);
   caml_call1(Ppx_expect_runtime[1][1], "nano_mutex/src/import.ml");
   caml_call2(Ppx_inline_test_lib[6], cst_nano_mutex, "import.ml");
   caml_call1(Ppx_inline_test_lib[7], cst_nano_mutex);
   caml_call1(Ppx_expect_runtime[1][2], 0);
   caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2], 0);
   caml_call1(Ppx_module_timer_runtime[5], cst_Nano_mutex_Import);
   var Nano_mutex_Import = [0];
   runtime.caml_register_global(11, Nano_mutex_Import, cst_Nano_mutex_Import);
   return;
  }
  (globalThis));

//# unitInfo: Provides: Nano_mutex
//# unitInfo: Requires: Core, Core__Error, Core__Or_error, Core_thread, Error_checking_mutex, Ppx_bench_lib__Benchmark_accumulator, Ppx_expect_runtime, Ppx_inline_test_lib, Ppx_module_timer_runtime, Sexplib0__Sexp_conv, Stdlib__Condition, Thread_safe_queue, Uopt
(function
  (globalThis){
   "use strict";
   var
    runtime = globalThis.jsoo_runtime,
    cst_Nano_mutex$0 = "Nano_mutex",
    cst_mutex = "mutex",
    cst_nano_mutex$0 = "nano_mutex",
    cst_nano_mutex_src_nano_mutex_ = "nano_mutex/src/nano_mutex.ml",
    caml_maybe_attach_backtrace = runtime.caml_maybe_attach_backtrace,
    caml_wrap_exception = runtime.caml_wrap_exception;
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
   function caml_call5(f, a0, a1, a2, a3, a4){
    return (f.l >= 0 ? f.l : f.l = f.length) == 5
            ? f(a0, a1, a2, a3, a4)
            : runtime.caml_call_gen(f, [a0, a1, a2, a3, a4]);
   }
   var
    global_data = runtime.caml_get_global_data(),
    Core = global_data.Core,
    Uopt = global_data.Uopt,
    Core_Error = global_data.Core__Error,
    Core_thread = global_data.Core_thread,
    Assert_failure = global_data.Assert_failure,
    Sexplib0_Sexp_conv = global_data.Sexplib0__Sexp_conv,
    Stdlib_Condition = global_data.Stdlib__Condition,
    Error_checking_mutex = global_data.Error_checking_mutex,
    Thread_safe_queue = global_data.Thread_safe_queue,
    Ppx_module_timer_runtime = global_data.Ppx_module_timer_runtime,
    Ppx_bench_lib_Benchmark_accumu =
      global_data.Ppx_bench_lib__Benchmark_accumulator,
    Ppx_expect_runtime = global_data.Ppx_expect_runtime,
    Ppx_inline_test_lib = global_data.Ppx_inline_test_lib,
    Core_Or_error = global_data.Core__Or_error;
   caml_call1(Ppx_module_timer_runtime[4], cst_Nano_mutex$0);
   caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1], cst_nano_mutex$0);
   caml_call1(Ppx_expect_runtime[1][1], cst_nano_mutex_src_nano_mutex_);
   caml_call2(Ppx_inline_test_lib[6], cst_nano_mutex$0, "nano_mutex.ml");
   var
    ok_exn = Core_Or_error[40],
    _k_ = [0, 0],
    _n_ = [0, 0],
    cst_attempt_to_unlock_an_unloc = "attempt to unlock an unlocked mutex",
    cst_attempt_to_unlock_mutex_he =
      "attempt to unlock mutex held by another thread",
    _l_ = [0, cst_mutex],
    _m_ = [0, "current_thread_id"],
    _i_ = [0, -326120466],
    _j_ = [0, -453623846],
    cst_attempt_to_lock_mutex_by_t =
      "attempt to lock mutex by thread already holding it",
    _h_ = [0, cst_nano_mutex_src_nano_mutex_, 98, 4],
    _g_ = [0, cst_nano_mutex_src_nano_mutex_, 105, 36],
    cst_invariant_failed = "invariant failed",
    _f_ = [0, cst_nano_mutex_src_nano_mutex_, 107, 4350, 4377],
    _c_ = [0, "blocker"],
    _d_ = [0, "num_using_blocker"],
    _e_ = [0, "id_of_thread_holding_lock"],
    cst_None = "None",
    _a_ = [0, "condition"],
    _b_ = [0, cst_mutex],
    cst_nano_mutex = cst_nano_mutex$0,
    cst_Nano_mutex = cst_Nano_mutex$0;
   function sexp_of_t(param){
    var
     condition_004 = param[2],
     mutex_002 = param[1],
     arg_005 = caml_call1(Sexplib0_Sexp_conv[23], condition_004),
     bnds_001 = [0, [1, [0, _a_, [0, arg_005, 0]]], 0],
     arg_003 = caml_call1(Sexplib0_Sexp_conv[23], mutex_002),
     bnds_001$0 = [0, [1, [0, _b_, [0, arg_003, 0]]], bnds_001];
    return [1, bnds_001$0];
   }
   var unused = caml_call1(Thread_safe_queue[3], 0);
   function save_unused(t){
    return caml_call2(Thread_safe_queue[5], unused, t);
   }
   function signal(t){return caml_call1(Stdlib_Condition[3], t[2]);}
   var equal = Core[384], sexp_of_t$0 = Core[389], none = -1;
   function is_none(t){return caml_call2(Core[90], t, none);}
   function is_some(t){return caml_call2(Core[93], t, none);}
   function sexp_of_t$1(param){
    var
     id_of_thread_holding_lock_009 = param[1],
     num_using_blocker_011 = param[2],
     blocker_013 = param[3],
     arg_014 = caml_call2(Uopt[2], sexp_of_t, blocker_013),
     bnds_008 = [0, [1, [0, _c_, [0, arg_014, 0]]], 0],
     arg_012 = caml_call1(Core[389], num_using_blocker_011),
     bnds_008$0 = [0, [1, [0, _d_, [0, arg_012, 0]]], bnds_008],
     arg_010 =
       caml_call2(Core[90], id_of_thread_holding_lock_009, none)
        ? caml_call1(Sexplib0_Sexp_conv[7], cst_None)
        : caml_call1(sexp_of_t$0, id_of_thread_holding_lock_009),
     bnds_008$1 = [0, [1, [0, _e_, [0, arg_010, 0]]], bnds_008$0];
    return [1, bnds_008$1];
   }
   function invariant(t){
    try{
     if(! caml_call2(Core[88], t[2], 0))
      throw caml_maybe_attach_backtrace([0, Assert_failure, _h_], 1);
     var _C_ = caml_call2(Core[90], t[2], 0);
     if(_C_){
      if(! caml_call1(Uopt[7], t[3]))
       throw caml_maybe_attach_backtrace([0, Assert_failure, _g_], 1);
      var _D_ = 0;
     }
     else
      var _D_ = _C_;
     return _D_;
    }
    catch(exn$0){
     var
      exn = caml_wrap_exception(exn$0),
      _B_ =
        function(param){
         var
          arg1_016 = param[2],
          arg0_015 = param[1],
          res0_017 = caml_call1(Core[625], arg0_015),
          res1_018 = sexp_of_t$1(arg1_016);
         return [1, [0, res0_017, [0, res1_018, 0]]];
        };
     return caml_call5
             (Core[247], 0, _f_, cst_invariant_failed, [0, exn, t], _B_);
    }
   }
   function equal$0(t$0, t){return t$0 === t ? 1 : 0;}
   function create(param){return [0, none, 0, Uopt[5]];}
   function current_thread_id(param){
    var _A_ = caml_call1(Core_thread[3], 0);
    return caml_call1(Core_thread[4], _A_);
   }
   function current_thread_has_lock(t){
    var _z_ = current_thread_id(0);
    return caml_call2(equal, t[1], _z_);
   }
   function error_recursive_lock(t){
    function _x_(param){
     var
      arg1_020 = param[2],
      arg0_019 = param[1],
      res0_021 = caml_call1(Core[389], arg0_019),
      res1_022 = sexp_of_t$1(arg1_020);
     return [1, [0, res0_021, [0, res1_022, 0]]];
    }
    var _y_ = [0, current_thread_id(0), t];
    return [1,
            caml_call5
             (Core_Error[19], 0, 0, cst_attempt_to_lock_mutex_by_t, _y_, _x_)];
   }
   function try_lock(t){
    var current_thread_id$0 = current_thread_id(0);
    return is_none(t[1])
            ? (t[1] = current_thread_id$0, _i_)
            : caml_call2
               (equal, current_thread_id$0, t[1])
              ? error_recursive_lock(t)
              : _j_;
   }
   function try_lock_exn(t){return caml_call1(ok_exn, try_lock(t));}
   function with_blocker(t, f){
    t[2] = t[2] + 1 | 0;
    var ppx_optional_e_0 = t[3];
    if(caml_call1(Uopt[15][1][1], ppx_optional_e_0)){
     var _s_ = caml_call1(Thread_safe_queue[4], unused);
     if(caml_call2(Core[91], _s_, 0))
      var new_blocker = caml_call1(Thread_safe_queue[6], unused);
     else
      var
       _t_ = caml_call1(Stdlib_Condition[1], 0),
       new_blocker = [0, caml_call1(Error_checking_mutex[1], 0), _t_];
     var
      blocker =
        caml_call1(Uopt[8], t[3])
         ? caml_call1(Uopt[12], t[3])
         : (t[3] = caml_call1(Uopt[6], new_blocker), new_blocker);
     if(1 - (blocker === new_blocker ? 1 : 0)) save_unused(new_blocker);
     var blocker$0 = blocker;
    }
    else
     var
      blocker$1 = caml_call1(Uopt[15][1][2], ppx_optional_e_0),
      blocker$0 = blocker$1;
    function _u_(param){
     t[2] = t[2] - 1 | 0;
     var _w_ = caml_call2(Core[90], t[2], 0);
     return _w_ ? (t[3] = Uopt[5], save_unused(blocker$0)) : _w_;
    }
    function _v_(param){
     function f$0(param){return caml_call1(f, blocker$0);}
     return caml_call2(Error_checking_mutex[6], blocker$0[1], f$0);
    }
    return caml_call2(Core[259], _v_, _u_);
   }
   function lock(t){
    for(;;){
     var current_thread_id$0 = current_thread_id(0);
     if(is_none(t[1])){t[1] = current_thread_id$0; return _k_;}
     if(caml_call2(equal, current_thread_id$0, t[1]))
      return error_recursive_lock(t);
     with_blocker
      (t,
       function(blocker){
        var _r_ = is_some(t[1]);
        return _r_
                ? caml_call2(Stdlib_Condition[2], blocker[2], blocker[1])
                : _r_;
       });
    }
   }
   function lock_exn(t){return caml_call1(ok_exn, lock(t));}
   function sexp_of_message(param){
    var
     mutex_026 = param[2],
     current_thread_id_024 = param[1],
     arg_027 = sexp_of_t$1(mutex_026),
     bnds_023 = [0, [1, [0, _l_, [0, arg_027, 0]]], 0],
     arg_025 = caml_call1(Core[389], current_thread_id_024),
     bnds_023$0 = [0, [1, [0, _m_, [0, arg_025, 0]]], bnds_023];
    return [1, bnds_023$0];
   }
   function unlock(t){
    var current_thread_id$0 = current_thread_id(0);
    if(! is_some(t[1])){
     var _q_ = [0, current_thread_id(0), t];
     return [1,
             caml_call5
              (Core_Error[19],
               0,
               0,
               cst_attempt_to_unlock_an_unloc,
               _q_,
               sexp_of_message)];
    }
    if(! caml_call2(equal, t[1], current_thread_id$0)){
     var _p_ = [0, current_thread_id(0), t];
     return [1,
             caml_call5
              (Core_Error[19],
               0,
               0,
               cst_attempt_to_unlock_mutex_he,
               _p_,
               sexp_of_message)];
    }
    t[1] = none;
    if(caml_call1(Uopt[8], t[3])) with_blocker(t, signal);
    return _n_;
   }
   function unlock_exn(t){return caml_call1(ok_exn, unlock(t));}
   function critical_section(t, f){
    lock_exn(t);
    function _o_(param){return unlock_exn(t);}
    return caml_call2(Core[259], f, _o_);
   }
   caml_call1(Ppx_inline_test_lib[7], cst_nano_mutex);
   caml_call1(Ppx_expect_runtime[1][2], 0);
   caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2], 0);
   caml_call1(Ppx_module_timer_runtime[5], cst_Nano_mutex);
   var
    Nano_mutex =
      [0,
       sexp_of_t$1,
       invariant,
       create,
       equal$0,
       current_thread_has_lock,
       lock,
       lock_exn,
       try_lock,
       try_lock_exn,
       unlock,
       unlock_exn,
       critical_section];
   runtime.caml_register_global(40, Nano_mutex, cst_Nano_mutex$0);
   return;
  }
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJuYW5vX211dGV4LmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6WyJva19leG4iLCJzZXhwX29mX3QiLCJjb25kaXRpb25fMDA0IiwibXV0ZXhfMDAyIiwiYXJnXzAwNSIsImJuZHNfMDAxIiwiYXJnXzAwMyIsImJuZHNfMDAxJDAiLCJ1bnVzZWQiLCJzYXZlX3VudXNlZCIsInQiLCJzaWduYWwiLCJlcXVhbCIsInNleHBfb2ZfdCQwIiwibm9uZSIsImlzX25vbmUiLCJpc19zb21lIiwic2V4cF9vZl90JDEiLCJpZF9vZl90aHJlYWRfaG9sZGluZ19sb2NrXzAwOSIsIm51bV91c2luZ19ibG9ja2VyXzAxMSIsImJsb2NrZXJfMDEzIiwiYXJnXzAxNCIsImJuZHNfMDA4IiwiYXJnXzAxMiIsImJuZHNfMDA4JDAiLCJhcmdfMDEwIiwiYm5kc18wMDgkMSIsImludmFyaWFudCIsImV4biQwIiwiZXhuIiwiYXJnMV8wMTYiLCJhcmcwXzAxNSIsInJlczBfMDE3IiwicmVzMV8wMTgiLCJlcXVhbCQwIiwidCQwIiwiY3JlYXRlIiwiY3VycmVudF90aHJlYWRfaWQiLCJjdXJyZW50X3RocmVhZF9oYXNfbG9jayIsImVycm9yX3JlY3Vyc2l2ZV9sb2NrIiwiYXJnMV8wMjAiLCJhcmcwXzAxOSIsInJlczBfMDIxIiwicmVzMV8wMjIiLCJ0cnlfbG9jayIsImN1cnJlbnRfdGhyZWFkX2lkJDAiLCJ0cnlfbG9ja19leG4iLCJ3aXRoX2Jsb2NrZXIiLCJmIiwicHB4X29wdGlvbmFsX2VfMCIsIm5ld19ibG9ja2VyIiwiYmxvY2tlciIsImJsb2NrZXIkMCIsImJsb2NrZXIkMSIsImYkMCIsImxvY2siLCJsb2NrX2V4biIsInNleHBfb2ZfbWVzc2FnZSIsIm11dGV4XzAyNiIsImN1cnJlbnRfdGhyZWFkX2lkXzAyNCIsImFyZ18wMjciLCJibmRzXzAyMyIsImFyZ18wMjUiLCJibmRzXzAyMyQwIiwidW5sb2NrIiwidW5sb2NrX2V4biIsImNyaXRpY2FsX3NlY3Rpb24iXSwic291cmNlcyI6WyIvaG9tZS9saWFtLWNhcnBlbnRlci8ub3BhbS9wZXJzb25hbC1zaXRlL2xpYi9jb3JlX3VuaXgvbmFub19tdXRleC9uYW5vX211dGV4X18ubWwiLCIvaG9tZS9saWFtLWNhcnBlbnRlci8ub3BhbS9wZXJzb25hbC1zaXRlL2xpYi9jb3JlX3VuaXgvbmFub19tdXRleC9uYW5vX211dGV4Lm1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0dBS3NCOztJQUFBOzs7O0U7Ozs7Ozs7Ozs7OztHOzs7OztHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFOzs7Ozs7Ozs7Ozs7Ozs7O0c7Ozs7O0c7Ozs7O0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0ZsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRixTQUFBQztJQUFBO0tBRUlDO0tBREFDO0tBQ0FDLFVBQUEsbUNBQUFGO0tBRkpHLGdDQUVJRDtLQURBRSxVQUFBLG1DQUFBSDtLQURKSSxrQ0FDSUQsZUFESkQ7SUFBQSxXQUFBRTtHQUlvQjtHQU1pQixJQUFqQ0MsU0FBaUM7WUFJakNDLFlBQVlDO0lBQUksT0FBQSxpQ0FKaEJGLFFBSVlFO0dBQXNDO1lBVWxEQyxPQUFPRCxHQUFJLHVDQUFKQSxNQUFnQztHQVczQyxJQUFBRSxtQkFBQUMseUJBRUlDO1lBQ2dCQyxRQUFRTCxHQUFJLDRCQUFKQSxHQUR4QkksTUFDb0M7WUFDcEJFLFFBQVFOLEdBQUksNEJBQUpBLEdBRnhCSSxNQUVxQztZQTJCM0NHO0lBQUE7S0F6QmdCQztLQTJCSkM7S0FDQUM7S0FBQUMsVUFBQSxvQkFyRVZwQixXQXFFVW1CO0tBSFpFLGdDQUdZRDtLQURBRSxVQUFBLHNCQUFBSjtLQUZaSyxrQ0FFWUQsZUFGWkQ7S0FDWUc7T0ExQlcscUJBQVBQLCtCQUpWSjs7cUJBRkpELGFBTWNLO0tBeUJoQlEsa0NBQ1lELGVBRFpEO0lBQUEsV0FBQUU7R0FLb0I7WUFFaEJDLFVBQVVqQjtJQUNaO0tBQ1MsS0FBQSxxQkFGR0E7TUFFVixNQUFBO0tBT0csVUFBQSxx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LFNBOENpQjlDO3dCQUVZLE9BSjdCdUQsV0FFaUJ2RCxHQUV3QjtJQUF2QixPQUFBLHNCQUZFc0M7R0FFc0I7Ozs7Ozs7O09BMU05Qy9CO09BT0lVO09BZ0JBUztPQUZBRjtPQVlBSTtPQWlGSWlCO09Bd0NKQztPQTNHQVo7T0FnQkFFO09BbUhBa0I7T0FvQkFDO09BRUFDOzs7RSIsInNvdXJjZXNDb250ZW50IjpbIigqIGdlbmVyYXRlZCBieSBkdW5lICopXG5cbigqKiBAY2Fub25pY2FsIE5hbm9fbXV0ZXguSW1wb3J0ICopXG5tb2R1bGUgSW1wb3J0ID0gTmFub19tdXRleF9fSW1wb3J0XG5cbm1vZHVsZSBOYW5vX211dGV4X18gPSBzdHJ1Y3QgZW5kXG5bQEBkZXByZWNhdGVkIFwidGhpcyBtb2R1bGUgaXMgc2hhZG93ZWRcIl1cbiIsIm9wZW4hIENvcmVcbm9wZW4hIEltcG9ydFxuXG5sZXQgb2tfZXhuID0gT3JfZXJyb3Iub2tfZXhuXG5cbigqIEEgW0Jsb2NrZXIudF0gaXMgYW4gb3JkaW5hcnkgbXV0ZXggYW5kIGNvbmRpdGlvbmFsIHZhcmlhYmxlIHVzZWQgdG8gaW1wbGVtZW50IGJsb2NraW5nXG4gICB3aGVuIHRoZXJlIGlzIGxvY2sgY29udGVudGlvbi4gKilcbm1vZHVsZSBCbG9ja2VyIDogc2lnXG4gIHR5cGUgdCBbQEBkZXJpdmluZyBzZXhwX29mXVxuXG4gIHZhbCBjcmVhdGUgOiB1bml0IC0+IHRcbiAgdmFsIGNyaXRpY2FsX3NlY3Rpb24gOiB0IC0+IGY6KHVuaXQgLT4gJ2EpIC0+ICdhXG4gIHZhbCB3YWl0IDogdCAtPiB1bml0XG4gIHZhbCBzaWduYWwgOiB0IC0+IHVuaXRcbiAgdmFsIHNhdmVfdW51c2VkIDogdCAtPiB1bml0XG5lbmQgPSBzdHJ1Y3RcbiAgKCogT3VyIHVzZSBvZiBtdXRleGVzIGlzIGFsd2F5cyB2aWEgW011dGV4LmNyaXRpY2FsX3NlY3Rpb25dLCBzbyB0aGF0IHdlIGFsd2F5cyBsb2NrXG4gICAgIHRoZW0gYW5kIHVubG9jayB0aGVtIGZyb20gYSBzaW5nbGUgdGhyZWFkLiAgU28sIHdlIHVzZSBbQ29yZS5NdXRleF0sIHdoaWNoIGlzXG4gICAgIGVycm9yLWNoZWNraW5nIG11dGV4ZXMsIHdoaWNoIHdpbGwgY2F0Y2ggYW55IHVzZSB0aGF0IGlzIG5vdCB3aGF0IHdlIGV4cGVjdC4gKilcbiAgbW9kdWxlIENvbmRpdGlvbiA9IENvbmRpdGlvblxuICBtb2R1bGUgTXV0ZXggPSBFcnJvcl9jaGVja2luZ19tdXRleFxuXG4gIHR5cGUgdCA9XG4gICAgeyBtdXRleCA6IChNdXRleC50W0BzZXhwLm9wYXF1ZV0pXG4gICAgOyBjb25kaXRpb24gOiAoQ29uZGl0aW9uLnRbQHNleHAub3BhcXVlXSlcbiAgICB9XG4gIFtAQGRlcml2aW5nIHNleHBfb2ZdXG5cbiAgKCogV2Uga2VlcCBhIGNhY2hlIG9mIHVudXNlZCBibG9ja2Vycywgc2luY2UgdGhleSBhcmUgcmVsYXRpdmVseSBjb3N0bHkgdG8gY3JlYXRlLCBhbmRcbiAgICAgd2Ugc2hvdWxkIG5ldmVyIG5lZWQgdmVyeSBtYW55IHNpbXVsdGFuZW91c2x5LiAgV2Ugc2hvdWxkIG5ldmVyIG5lZWQgbW9yZSBibG9ja2Vyc1xuICAgICB0aGFuIHRoZSBudW1iZXIgb2YgbmFubyBtdXRleGVzIGJlaW5nIHNpbXVsdGFuZW91c2x5IGJsb2NrZWQgb24sIHdoaWNoIG9mIGNvdXJzZSBpc1xuICAgICBubyBtb3JlIHRoYW4gdGhlIHRvdGFsIG51bWJlciBvZiBzaW11bHRhbmVvdXMgdGhyZWFkcy4gKilcbiAgbGV0IHVudXNlZCA6IHQgVGhyZWFkX3NhZmVfcXVldWUudCA9IFRocmVhZF9zYWZlX3F1ZXVlLmNyZWF0ZSAoKVxuXG4gICgqIFtzYXZlX3VudXNlZCB0XSBzaG91bGQgYmUgY2FsbGVkIHdoZW4gW3RdIGlzIG5vIGxvbmdlciBpbiB1c2UsIHNvIGl0IGNhbiBiZSByZXR1cm5lZFxuICAgICBieSBhIGZ1dHVyZSBjYWxsIG9mIFtjcmVhdGVdLiAqKVxuICBsZXQgc2F2ZV91bnVzZWQgdCA9IFRocmVhZF9zYWZlX3F1ZXVlLmVucXVldWUgdW51c2VkIHRcblxuICBsZXQgY3JlYXRlICgpID1cbiAgICBpZiBUaHJlYWRfc2FmZV9xdWV1ZS5sZW5ndGggdW51c2VkID4gMFxuICAgIHRoZW4gVGhyZWFkX3NhZmVfcXVldWUuZGVxdWV1ZV9leG4gdW51c2VkXG4gICAgZWxzZSB7IG11dGV4ID0gTXV0ZXguY3JlYXRlICgpOyBjb25kaXRpb24gPSBDb25kaXRpb24uY3JlYXRlICgpIH1cbiAgOztcblxuICBsZXQgY3JpdGljYWxfc2VjdGlvbiB0IH5mID0gTXV0ZXguY3JpdGljYWxfc2VjdGlvbiB0Lm11dGV4IH5mXG4gIGxldCB3YWl0IHQgPSBDb25kaXRpb24ud2FpdCB0LmNvbmRpdGlvbiB0Lm11dGV4XG4gIGxldCBzaWduYWwgdCA9IENvbmRpdGlvbi5zaWduYWwgdC5jb25kaXRpb25cbmVuZFxuXG5tb2R1bGUgVGhyZWFkX2lkX29wdGlvbiA6IHNpZ1xuICB0eXBlIHQgW0BAZGVyaXZpbmcgZXF1YWwsIHNleHBfb2ZdIFtAQGltbWVkaWF0ZV1cblxuICB2YWwgbm9uZSA6IHRcbiAgdmFsIHNvbWUgOiBpbnQgLT4gdFxuICB2YWwgaXNfbm9uZSA6IHQgLT4gYm9vbFxuICB2YWwgaXNfc29tZSA6IHQgLT4gYm9vbFxuZW5kID0gc3RydWN0XG4gIHR5cGUgdCA9IGludCBbQEBkZXJpdmluZyBlcXVhbCwgc2V4cF9vZl1cblxuICBsZXQgbm9uZSA9IC0xXG4gIGxldFtAaW5saW5lIGFsd2F5c10gaXNfbm9uZSB0ID0gdCA9IG5vbmVcbiAgbGV0W0BpbmxpbmUgYWx3YXlzXSBpc19zb21lIHQgPSB0IDw+IG5vbmVcbiAgbGV0W0BpbmxpbmUgYWx3YXlzXSBzb21lIGludCA9IGludFxuICBsZXQgc2V4cF9vZl90IHQgPSBpZiB0ID0gbm9uZSB0aGVuIFslc2V4cCBcIk5vbmVcIl0gZWxzZSBbJXNleHAgKHQgOiB0KV1cbmVuZFxuXG4oKiBXZSByZXByZXNlbnQgYSBuYW5vIG11dGV4IHVzaW5nIGFuIE9DYW1sIHJlY29yZC4gIFRoZSBbaWRfb2ZfdGhyZWFkX2hvbGRpbmdfbG9ja10gZmllbGRcbiAgIHJlcHJlc2VudHMgd2hldGhlciB0aGUgbXV0ZXggaXMgbG9ja2VkIG9yIG5vdCwgYW5kIGlmIGl0IGlzIGxvY2tlZCwgd2hpY2ggdGhyZWFkIGhvbGRzXG4gICB0aGUgbG9jay4gIFdlIHVzZSBbVGhyZWFkX2lkX29wdGlvbl0gaW5zdGVhZCBvZiBbaW50IG9wdGlvbl0gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcbiAgICh1c2luZyBbaW50IG9wdGlvbl0gc2xvd3MgZG93biBsb2NrK3VubG9jayBieSBhIGZhY3RvciBvZiBhbG1vc3QgdHdvKS5cblxuICAgVGhlIG11dGV4IHJlY29yZCBoYXMgYW4gb3B0aW9uYWwgW2Jsb2NrZXJdIGZpZWxkIGZvciB1c2Ugd2hlbiB0aGUgbXV0ZXggaXMgY29udGVuZGVkLlxuICAgV2UgdXNlIHRoZSBPUy1sZXZlbCBjb25kaXRpb24gdmFyaWFibGUgaW4gW2Jsb2NrZXJdIHRvIFt3YWl0XSBpbiBhIHRocmVhZCB0aGF0IGRlc2lyZXNcbiAgIHRoZSBsb2NrIGFuZCB0byBbc2lnbmFsXSBmcm9tIGEgdGhyZWFkIHRoYXQgaXMgcmVsZWFzaW5nIGl0LlxuXG4gICBXaGVuIHRoaW5raW5nIGFib3V0IHRoZSBpbXBsZW1lbnRhdGlvbiwgaXQgaXMgaGVscGZ1bCB0byByZW1lbWJlciB0aGUgZm9sbG93aW5nXG4gICBkZXNpZGVyYXRhOlxuXG4gKiBTYWZldHkgLS0gb25seSBvbmUgdGhyZWFkIGNhbiBhY3F1aXJlIHRoZSBsb2NrIGF0IGEgdGltZS4gIFRoaXMgaXMgYWNjb21wbGlzaGVkXG4gICB1c25nIGEgdGVzdC1hbmQtc2V0IHRvIHNldCBbaWRfb2ZfdGhyZWFkX2hvbGRpbmdfbG9ja10uXG5cbiAqIExpdmVuZXNzIC0tIGlmIHRoZSBtdXRleCBpcyB1bmxvY2tlZCBhbmQgc29tZSB0aHJlYWRzIGFyZSB3YWl0aW5nIG9uIGl0LCB0aGVuIG9uZSBvZlxuICAgdGhvc2UgdGhyZWFkcyB3aWxsIGJlIHdva2VuIHVwIGFuZCBnaXZlbiBhIGNoYW5jZSB0byBhY3F1aXJlIGl0LiAgVGhpcyBpcyBhY2NvbXBsaXNoZWRcbiAgIGJ5IG9ubHkgd2FpdGluZyB3aGVuIHdlIGNhbiBlbnN1cmUgdGhhdCB0aGVyZSB3aWxsIGJlIGEgW3NpZ25hbF0gb2YgdGhlIGNvbmRpdGlvblxuICAgdmFyaWFibGUgaW4gdGhlIGZ1dHVyZS4gIFNlZSB0aGUgbW9yZSBkZXRhaWxlZCBjb21tZW50IGluIFtsb2NrXS5cblxuICogUGVyZm9ybWFuY2UgLS0gZG8gbm90IHNwaW4gdHJ5aW5nIHRvIGFjcXVpcmUgdGhlIGxvY2suICBUaGlzIGlzIGFjY29tcGxpc2hlZCBieVxuICAgd2FpdGluZyBvbiBhIGNvbmRpdGlvbiB2YXJpYWJsZSBpZiBhIGxvY2sgaXMgY29udGVuZGVkLiAqKVxudHlwZSB0ID1cbiAgeyBtdXRhYmxlIGlkX29mX3RocmVhZF9ob2xkaW5nX2xvY2sgOiBUaHJlYWRfaWRfb3B0aW9uLnRcbiAgOyBtdXRhYmxlIG51bV91c2luZ19ibG9ja2VyIDogaW50XG4gIDsgbXV0YWJsZSBibG9ja2VyIDogQmxvY2tlci50IFVvcHQudFxuICB9XG5bQEBkZXJpdmluZyBzZXhwX29mXVxuXG5sZXQgaW52YXJpYW50IHQgPVxuICB0cnlcbiAgICBhc3NlcnQgKHQubnVtX3VzaW5nX2Jsb2NrZXIgPj0gMCk7XG4gICAgKCogSXQgaXMgdGhlIGNhc2UgdGhhdCBpZiBbdC5udW1fdXNpbmdfYmxvY2tlciA9IDBdIHRoZW4gW09wdGlvbi5pc19ub25lIHQuYmxvY2tlcl0sXG4gICAgICAgaG93ZXZlciB0aGUgY29udmVyc2UgZG9lcyBub3QgbmVjZXNzYXJpbHkgaG9sZC4gIFRoZSBjb2RlIGluIFt3aXRoX2Jsb2NrZXJdIGRvZXNuJ3RcbiAgICAgICB0YWtlIGNhcmUgdG8gYXRvbWljYWxseSBpbmNyZW1lbnQgW3QubnVtX3VzaW5nX2Jsb2NrZXJdIGFuZCBzZXQgW3QuYmxvY2tlcl0gdG9cbiAgICAgICBbU29tZV0uICBJdCBjb3VsZCwgYnV0IGRvaW5nIHNvIGlzIG5vdCBuZWNlc3NhcnkgZm9yIHRoZSBjb3JyZWN0bmVzcyBvZiBvZlxuICAgICAgIFt3aXRoX2Jsb2NrZXJdLCB3aGljaCBvbmx5IHJlbGllcyBvbiB0ZXN0LWFuZC1zZXQgb2YgW3QuYmxvY2tlcl0gdG8gbWFrZSBzdXJlXG4gICAgICAgdGhlcmUgaXMgYW4gYWdyZWVkLXVwb24gd2lubmVyIGluIHRoZSByYWNlIHRvIGNyZWF0ZSBhIGJsb2NrZXIuICopXG4gICAgaWYgdC5udW1fdXNpbmdfYmxvY2tlciA9IDAgdGhlbiBhc3NlcnQgKFVvcHQuaXNfbm9uZSB0LmJsb2NrZXIpXG4gIHdpdGhcbiAgfCBleG4gLT4gZmFpbHdpdGhzIH5oZXJlOlslaGVyZV0gXCJpbnZhcmlhbnQgZmFpbGVkXCIgKGV4biwgdCkgWyVzZXhwX29mOiBleG4gKiB0XVxuOztcblxubGV0IGVxdWFsICh0IDogdCkgdCcgPSBwaHlzX2VxdWFsIHQgdCdcblxubGV0IGNyZWF0ZSAoKSA9XG4gIHsgaWRfb2ZfdGhyZWFkX2hvbGRpbmdfbG9jayA9IFRocmVhZF9pZF9vcHRpb24ubm9uZVxuICA7IG51bV91c2luZ19ibG9ja2VyID0gMFxuICA7IGJsb2NrZXIgPSBVb3B0Lm5vbmVcbiAgfVxuOztcblxubGV0IGlzX2xvY2tlZCB0ID0gVGhyZWFkX2lkX29wdGlvbi5pc19zb21lIHQuaWRfb2ZfdGhyZWFkX2hvbGRpbmdfbG9ja1xubGV0IGN1cnJlbnRfdGhyZWFkX2lkICgpID0gVGhyZWFkLmlkIChUaHJlYWQuc2VsZiAoKSlcblxubGV0IGN1cnJlbnRfdGhyZWFkX2hhc19sb2NrIHQgPVxuICBUaHJlYWRfaWRfb3B0aW9uLmVxdWFsXG4gICAgdC5pZF9vZl90aHJlYWRfaG9sZGluZ19sb2NrXG4gICAgKGN1cnJlbnRfdGhyZWFkX2lkICgpIHw+IFRocmVhZF9pZF9vcHRpb24uc29tZSlcbjs7XG5cbmxldFtAY29sZF0gZXJyb3JfcmVjdXJzaXZlX2xvY2sgdCA9XG4gIEVycm9yXG4gICAgKEVycm9yLmNyZWF0ZVxuICAgICAgIFwiYXR0ZW1wdCB0byBsb2NrIG11dGV4IGJ5IHRocmVhZCBhbHJlYWR5IGhvbGRpbmcgaXRcIlxuICAgICAgIChjdXJyZW50X3RocmVhZF9pZCAoKSwgdClcbiAgICAgICBbJXNleHBfb2Y6IGludCAqIHRdKVxuOztcblxubGV0IHRyeV9sb2NrIHQgPVxuICAoKiBUaGUgZm9sbG93aW5nIGNvZGUgcmVsaWVzIG9uIGFuIGF0b21pYyB0ZXN0LWFuZC1zZXQgb2YgW2lkX29mX3RocmVhZF9ob2xkaW5nX2xvY2tdLFxuICAgICBzbyB0aGF0IHRoZXJlIGlzIGEgZGVmaW5pdGl2ZSB3aW5uZXIgaW4gYSByYWNlIGJldHdlZW4gbXVsdGlwbGUgbG9ja2VycyBhbmQgZXZlcnlib2R5XG4gICAgIGFncmVlcyB3aG8gYWNxdWlyZWQgdGhlIGxvY2suICopXG4gIGxldCBjdXJyZW50X3RocmVhZF9pZCA9IGN1cnJlbnRfdGhyZWFkX2lkICgpIHw+IFRocmVhZF9pZF9vcHRpb24uc29tZSBpblxuICAoKiBCRUdJTiBBVE9NSUMgKilcbiAgaWYgVGhyZWFkX2lkX29wdGlvbi5pc19ub25lIHQuaWRfb2ZfdGhyZWFkX2hvbGRpbmdfbG9ja1xuICB0aGVuIChcbiAgICB0LmlkX29mX3RocmVhZF9ob2xkaW5nX2xvY2sgPC0gY3VycmVudF90aHJlYWRfaWQ7XG4gICAgKCogRU5EIEFUT01JQyAqKVxuICAgIE9rIGBBY3F1aXJlZClcbiAgZWxzZSBpZiBUaHJlYWRfaWRfb3B0aW9uLmVxdWFsIGN1cnJlbnRfdGhyZWFkX2lkIHQuaWRfb2ZfdGhyZWFkX2hvbGRpbmdfbG9ja1xuICB0aGVuIGVycm9yX3JlY3Vyc2l2ZV9sb2NrIHRcbiAgZWxzZSBPayBgTm90X2FjcXVpcmVkXG47O1xuXG5sZXQgdHJ5X2xvY2tfZXhuIHQgPSBva19leG4gKHRyeV9sb2NrIHQpXG5cbigqIE1hcmtlZCB3aXRoIGF0dHJpYnV0ZXMgc28gdGhlIGFsbG9jYXRpb24gb2YgW25ld19ibG9ja2VyXSBhdCB0aGUgY2FsbCBzaXRlIGNhbm5vdCBiZVxuICAgc3VuayBkb3duIGludG8gdGhlIGF0b21pYyBzZWN0aW9uICh0aGVyZSBleGlzdHMgbm8gYmFycmllciBpbiBPQ2FtbCByaWdodCBub3cgdG9cbiAgIHByZXZlbnQgdGhpcykgKilcblxubGV0W0BpbmxpbmUgbmV2ZXJdIFtAc3BlY2lhbGlzZSBuZXZlcl0gW0Bsb2NhbCBuZXZlcl0gd2l0aF9ibG9ja2VyMCB0IH5uZXdfYmxvY2tlciA9XG4gICgqIEJFR0lOIEFUT01JQyAqKVxuICBpZiBVb3B0LmlzX3NvbWUgdC5ibG9ja2VyXG4gIHRoZW4gVW9wdC51bnNhZmVfdmFsdWUgdC5ibG9ja2VyXG4gIGVsc2UgKFxuICAgIHQuYmxvY2tlciA8LSBVb3B0LnNvbWUgbmV3X2Jsb2NrZXI7XG4gICAgbmV3X2Jsb2NrZXIpXG47O1xuXG4oKiBFTkQgQVRPTUlDICopXG5cbigqIFt3aXRoX2Jsb2NrZXIgdCBmXSBydW5zIFtmIGJsb2NrZXJdIGluIGEgY3JpdGljYWwgc2VjdGlvbi4gIEl0IGFsbG9jYXRlcyBhIGJsb2NrZXIgZm9yXG4gICBbdF0gaWYgW3RdIGRvZXNuJ3QgYWxyZWFkeSBoYXZlIG9uZS4gKilcbmxldCB3aXRoX2Jsb2NrZXIgdCBmID1cbiAgdC5udW1fdXNpbmdfYmxvY2tlciA8LSB0Lm51bV91c2luZ19ibG9ja2VyICsgMTtcbiAgbGV0IGJsb2NrZXIgPVxuICAgIG1hdGNoJW9wdGlvbmFsLlVvcHQgdC5ibG9ja2VyIHdpdGhcbiAgICB8IFNvbWUgYmxvY2tlciAtPiBibG9ja2VyXG4gICAgfCBOb25lIC0+XG4gICAgICAoKiBXZSBhbGxvY2F0ZSBbbmV3X2Jsb2NrZXJdIGhlcmUgYmVjYXVzZSBvbmUgY2Fubm90IGFsbG9jYXRlIGluc2lkZSBhbiBhdG9taWNcbiAgICAgICAgIHJlZ2lvbi4gKilcbiAgICAgIGxldCBuZXdfYmxvY2tlciA9IEJsb2NrZXIuY3JlYXRlICgpIGluXG4gICAgICBsZXQgYmxvY2tlciA9XG4gICAgICAgICgqIFdlIG5lZWQgdGhlIGZvbGxvd2luZyB0ZXN0LWFuZC1zZXQgdG8gYmUgYXRvbWljIHNvIHRoYXQgdGhlcmUgaXMgYSBkZWZpbml0aXZlXG4gICAgICAgICAgIHdpbm5lciBpbiBhIHJhY2UgYmV0d2VlbiBtdWx0aXBsZSBjYWxscyB0byBbd2l0aF9ibG9ja2VyXSwgc28gdGhhdCBldmVyeWJvZHlcbiAgICAgICAgICAgYWdyZWVzIHdoYXQgdGhlIHVuZGVybHlpbmcgW2Jsb2NrZXJdIGlzLiAqKVxuICAgICAgICB3aXRoX2Jsb2NrZXIwIHQgfm5ld19ibG9ja2VyXG4gICAgICBpblxuICAgICAgaWYgbm90IChwaHlzX2VxdWFsIGJsb2NrZXIgbmV3X2Jsb2NrZXIpIHRoZW4gQmxvY2tlci5zYXZlX3VudXNlZCBuZXdfYmxvY2tlcjtcbiAgICAgIGJsb2NrZXJcbiAgaW5cbiAgcHJvdGVjdFxuICAgIH5mOihmdW4gKCkgLT4gQmxvY2tlci5jcml0aWNhbF9zZWN0aW9uIGJsb2NrZXIgfmY6KGZ1biAoKSAtPiBmIGJsb2NrZXIpIFtAbm9udGFpbF0pXG4gICAgfmZpbmFsbHk6KGZ1biAoKSAtPlxuICAgICAgKCogV2UgbmVlZCB0aGUgZm9sbG93aW5nIGRlY3JlbWVudC10ZXN0LWFuZC1zZXQgdG8gYmUgYXRvbWljIHNvIHRoYXQgd2UncmUgc3VyZSB0aGF0XG4gICAgICAgICB0aGUgbGFzdCB1c2VyIG9mIGJsb2NrZXIgY2xlYXJzIGl0LiAqKVxuICAgICAgKCogQkVHSU4gQVRPTUlDICopXG4gICAgICB0Lm51bV91c2luZ19ibG9ja2VyIDwtIHQubnVtX3VzaW5nX2Jsb2NrZXIgLSAxO1xuICAgICAgaWYgdC5udW1fdXNpbmdfYmxvY2tlciA9IDBcbiAgICAgIHRoZW4gKFxuICAgICAgICB0LmJsb2NrZXIgPC0gVW9wdC5ub25lO1xuICAgICAgICAoKiBFTkQgQVRPTUlDICopXG4gICAgICAgIEJsb2NrZXIuc2F2ZV91bnVzZWQgYmxvY2tlcikpIFtAbm9udGFpbF1cbjs7XG5cbmxldCByZWMgbG9jayB0ID1cbiAgKCogVGhlIGZvbGxvd2luZyBjb2RlIHJlbGllcyBvbiBhbiBhdG9taWMgdGVzdC1hbmQtc2V0IG9mIFtpZF9vZl90aHJlYWRfaG9sZGluZ19sb2NrXSxcbiAgICAgc28gdGhhdCB0aGVyZSBpcyBhIGRlZmluaXRpdmUgd2lubmVyIGluIGEgcmFjZSBiZXR3ZWVuIG11bHRpcGxlIFtsb2NrXWVycywgYW5kXG4gICAgIGV2ZXJ5Ym9keSBhZ3JlZXMgd2hvIGFjcXVpcmVkIHRoZSBsb2NrLlxuXG4gICAgIElmIFtpc19sb2NrZWQgdF0sIHdlIGJsb2NrIHRoZSBsb2NraW5nIHRocmVhZCB1c2luZyBbQmxvY2tlci53YWl0XSwgdW50aWwgc29tZVxuICAgICB1bmxvY2tpbmcgdGhyZWFkIFtCbG9ja2VyLnNpZ25hbF1zIHVzLiAgVGhlcmUgaXMgYSByYWNlIGJldHdlZW4gdGhlIFt3YWl0XSBhbmQgdGhlXG4gICAgIFtzaWduYWxdLiAgSWYgdGhlIHVubG9ja2luZyB0aHJlYWQgc2lnbmFscyBpbiBiZXR3ZWVuIG91ciB0ZXN0IG9mXG4gICAgIFt0LmlkX29mX3RocmVhZF9ob2xkaW5nX2xvY2tdIGFuZCBvdXIgW3dhaXRdLCB0aGVuIG91ciBbd2FpdF0gY291bGQgbWlzcyB0aGUgc2lnbmFsXG4gICAgIGFuZCBibG9jayBmb3JldmVyLiAgV2UgYXZvaWQgdGhpcyByYWNlIGJ5IGNvbW1pdHRpbmcgdG8gd2FpdGluZyBpbnNpZGUgYVxuICAgICBbd2l0aF9ibG9ja2VyXSwgd2hpY2ggaW5jcmVtZW50cyBbdC5udW1fdXNpbmdfYmxvY2tlcl0uICBJZiB0aGUgW3NpZ25hbF0gb2NjdXJzXG4gICAgIGJlZm9yZSB0aGUgW3dpdGhfYmxvY2tlcl0sIHRoZW4gaXQgd2lsbCBoYXZlIGNsZWFyZWQgW3QuaWRfb2ZfdGhyZWFkX2hvbGRpbmdfbG9ja10sXG4gICAgIHdoaWNoIHdlIHdpbGwgbm90aWNlIGFzIFtub3QgKGlzX2xvY2tlZCB0KV0sIGFuZCB0aGVuIG5vdCBbd2FpdF0sIGFuZCBsb29wIHRyeWluZyB0b1xuICAgICBbbG9ja10gYWdhaW4uICBPdGhlcndpc2UsIHdoZW4gYW4gW3VubG9ja10gb2NjdXJzLCBpdCB3aWxsIHNlZSB0aGF0IFtpc19zb21lXG4gICAgIHQuYmxvY2tlcl0sIGFuZCB3aWxsIGVudGVyIGEgY3JpdGljYWwgc2VjdGlvbiBvbiBbYmxvY2tlcl0uICBCdXQgdGhlbiBpdCBtdXN0IHdhaXRcbiAgICAgdW50aWwgb3VyIGNyaXRpY2FsIHNlY3Rpb24gb24gW2Jsb2NrZXJdIGZpbmlzaGVzLCBhbmQgaGVuY2UgdW50aWwgb3VyIGNhbGwgdG8gW3dhaXRdXG4gICAgIGZpbmlzaGVzLiAgSGVuY2UsIHRoZSBbc2lnbmFsXSB3aWxsIG9jY3VyIGFmdGVyIHRoZSBbd2FpdF0uXG5cbiAgICAgVGhlIHJlY3Vyc2l2ZSBjYWxsIHRvIFtsb2NrXSB3aWxsIG5vdCBzcGluLiAgSXQgaGFwcGVucyBlaXRoZXIgYmVjYXVzZSB3ZSBqdXN0IGxvc3RcbiAgICAgdGhlIHJhY2Ugd2l0aCBhbiB1bmxvY2tlciwgaW4gd2hpY2ggY2FzZSB0aGUgc3Vic2VxdWVudCBbbG9ja10gd2lsbCBzdWNjZWVkLCBvclxuICAgICB3ZSBhY3R1YWxseSBoYWQgdG8gYmxvY2sgYmVjYXVzZSBzb21lb25lIGlzIGhvbGRpbmcgdGhlIGxvY2suICBUaGUgbGF0dGVyIGlzIHRoZVxuICAgICBvdmVyd2hlbG1pbmdseSBjb21tb24gY2FzZS5cblxuICAgICBPdGhlciB0aHJlYWRzIGNhbiBjaGFuZ2UgW3QuaWRfb2ZfdGhyZWFkX2hvbGRpbmdfbG9ja10gY29uY3VycmVudGx5IHdpdGggdGhpcyBjb2RlLlxuICAgICBIb3dldmVyLCBubyBvdGhlciB0aHJlYWQgY2FuIHNldCBpdCB0byBvdXIgW2N1cnJlbnRfdGhyZWFkX2lkXSwgc2luY2UgdGhyZWFkcyBvbmx5XG4gICAgIGV2ZXIgc2V0IFt0LmlkX29mX3RocmVhZF9ob2xkaW5nX2xvY2tdIHRvIHRoZWlyIGN1cnJlbnQgdGhyZWFkIGlkLCBvciBjbGVhciBpdC4gKilcbiAgbGV0IGN1cnJlbnRfdGhyZWFkX2lkID0gY3VycmVudF90aHJlYWRfaWQgKCkgfD4gVGhyZWFkX2lkX29wdGlvbi5zb21lIGluXG4gICgqIEJFR0lOIEFUT01JQyAqKVxuICBpZiBUaHJlYWRfaWRfb3B0aW9uLmlzX25vbmUgdC5pZF9vZl90aHJlYWRfaG9sZGluZ19sb2NrXG4gIHRoZW4gKFxuICAgIHQuaWRfb2ZfdGhyZWFkX2hvbGRpbmdfbG9jayA8LSBjdXJyZW50X3RocmVhZF9pZDtcbiAgICAoKiBFTkQgQVRPTUlDICopXG4gICAgT2sgKCkpXG4gIGVsc2UgaWYgVGhyZWFkX2lkX29wdGlvbi5lcXVhbCBjdXJyZW50X3RocmVhZF9pZCB0LmlkX29mX3RocmVhZF9ob2xkaW5nX2xvY2tcbiAgdGhlbiBlcnJvcl9yZWN1cnNpdmVfbG9jayB0XG4gIGVsc2UgKFxuICAgIHdpdGhfYmxvY2tlciB0IChmdW4gYmxvY2tlciAtPiBpZiBpc19sb2NrZWQgdCB0aGVuIEJsb2NrZXIud2FpdCBibG9ja2VyKTtcbiAgICBsb2NrIHQpXG47O1xuXG5sZXQgbG9ja19leG4gdCA9IG9rX2V4biAobG9jayB0KVxuXG50eXBlIG1lc3NhZ2UgPVxuICB7IGN1cnJlbnRfdGhyZWFkX2lkIDogaW50XG4gIDsgbXV0ZXggOiB0XG4gIH1cbltAQGRlcml2aW5nIHNleHBfb2ZdXG5cbmxldFtAY29sZF0gZXJyb3JfYXR0ZW1wdF90b191bmxvY2tfbXV0ZXhfaGVsZF9ieV9hbm90aGVyX3RocmVhZCB0ID1cbiAgRXJyb3JcbiAgICAoRXJyb3IuY3JlYXRlXG4gICAgICAgXCJhdHRlbXB0IHRvIHVubG9jayBtdXRleCBoZWxkIGJ5IGFub3RoZXIgdGhyZWFkXCJcbiAgICAgICB7IGN1cnJlbnRfdGhyZWFkX2lkID0gY3VycmVudF90aHJlYWRfaWQgKCk7IG11dGV4ID0gdCB9XG4gICAgICAgWyVzZXhwX29mOiBtZXNzYWdlXSlcbjs7XG5cbmxldFtAY29sZF0gZXJyb3JfYXR0ZW1wdF90b191bmxvY2tfYW5fdW5sb2NrZWRfbXV0ZXggdCA9XG4gIEVycm9yXG4gICAgKEVycm9yLmNyZWF0ZVxuICAgICAgIFwiYXR0ZW1wdCB0byB1bmxvY2sgYW4gdW5sb2NrZWQgbXV0ZXhcIlxuICAgICAgIHsgY3VycmVudF90aHJlYWRfaWQgPSBjdXJyZW50X3RocmVhZF9pZCAoKTsgbXV0ZXggPSB0IH1cbiAgICAgICBbJXNleHBfb2Y6IG1lc3NhZ2VdKVxuOztcblxubGV0IHVubG9jayB0ID1cbiAgbGV0IGN1cnJlbnRfdGhyZWFkX2lkID0gY3VycmVudF90aHJlYWRfaWQgKCkgaW5cbiAgKCogV2UgbmVlZCB0aGUgZm9sbG93aW5nIHRlc3QtYW5kLXNldCB0byBiZSBhdG9taWMgc28gdGhhdCB0aGVyZSBpcyBhIGRlZmluaXRpdmVcbiAgICAgd2lubmVyIGluIGEgcmFjZSBiZXR3ZWVuIG11bHRpcGxlIHVubG9ja2Vycywgc28gdGhhdCBvbmUgdW5sb2NrIHN1Y2NlZWRzIGFuZCB0aGVcbiAgICAgcmVzdCBmYWlsLiAqKVxuICAoKiBCRUdJTiBBVE9NSUMgKilcbiAgaWYgVGhyZWFkX2lkX29wdGlvbi5pc19zb21lIHQuaWRfb2ZfdGhyZWFkX2hvbGRpbmdfbG9ja1xuICB0aGVuXG4gICAgaWYgVGhyZWFkX2lkX29wdGlvbi5lcXVhbFxuICAgICAgICAgdC5pZF9vZl90aHJlYWRfaG9sZGluZ19sb2NrXG4gICAgICAgICAoY3VycmVudF90aHJlYWRfaWQgfD4gVGhyZWFkX2lkX29wdGlvbi5zb21lKVxuICAgIHRoZW4gKFxuICAgICAgdC5pZF9vZl90aHJlYWRfaG9sZGluZ19sb2NrIDwtIFRocmVhZF9pZF9vcHRpb24ubm9uZTtcbiAgICAgICgqIEVORCBBVE9NSUMgKilcbiAgICAgIGlmIFVvcHQuaXNfc29tZSB0LmJsb2NrZXIgdGhlbiB3aXRoX2Jsb2NrZXIgdCBCbG9ja2VyLnNpZ25hbDtcbiAgICAgIE9rICgpKVxuICAgIGVsc2UgZXJyb3JfYXR0ZW1wdF90b191bmxvY2tfbXV0ZXhfaGVsZF9ieV9hbm90aGVyX3RocmVhZCB0XG4gIGVsc2UgZXJyb3JfYXR0ZW1wdF90b191bmxvY2tfYW5fdW5sb2NrZWRfbXV0ZXggdFxuOztcblxubGV0IHVubG9ja19leG4gdCA9IG9rX2V4biAodW5sb2NrIHQpXG5cbmxldCBjcml0aWNhbF9zZWN0aW9uIHQgfmYgPVxuICBsb2NrX2V4biB0O1xuICBwcm90ZWN0IH5mIH5maW5hbGx5OihmdW4gKCkgLT4gdW5sb2NrX2V4biB0KVxuOztcbiJdfQ==
