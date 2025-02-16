// Generated by js_of_ocaml
//# buildInfo:effects=false, kind=cma, use-js-string=true, version=5.6.0

//# unitInfo: Provides: Command_unix
//# unitInfo: Requires: Core__Command_internal, Core__Pid, Core__Signal, Core_thread, Core_unix, Core_unix__File_descr, Ppx_bench_lib__Benchmark_accumulator, Ppx_expect_runtime, Ppx_inline_test_lib, Ppx_module_timer_runtime, Sys_unix, Time_float_unix, Version_util
(function
  (globalThis){
   "use strict";
   var
    runtime = globalThis.jsoo_runtime,
    cst_Command_unix$0 = "Command_unix",
    cst_command_unix$0 = "command_unix";
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
   function caml_call4(f, a0, a1, a2, a3){
    return (f.l >= 0 ? f.l : f.l = f.length) == 4
            ? f(a0, a1, a2, a3)
            : runtime.caml_call_gen(f, [a0, a1, a2, a3]);
   }
   var
    global_data = runtime.caml_get_global_data(),
    Ppx_module_timer_runtime = global_data.Ppx_module_timer_runtime,
    Ppx_bench_lib_Benchmark_accumu =
      global_data.Ppx_bench_lib__Benchmark_accumulator,
    Ppx_expect_runtime = global_data.Ppx_expect_runtime,
    Ppx_inline_test_lib = global_data.Ppx_inline_test_lib,
    Core_unix = global_data.Core_unix,
    Sys_unix = global_data.Sys_unix,
    Version_util = global_data.Version_util,
    Core_thread = global_data.Core_thread,
    Core_Pid = global_data.Core__Pid,
    Time_float_unix = global_data.Time_float_unix,
    Core_Command_internal = global_data.Core__Command_internal;
   caml_call1(Ppx_module_timer_runtime[4], cst_Command_unix$0);
   caml_call1(Ppx_bench_lib_Benchmark_accumu[1][1], cst_command_unix$0);
   caml_call1(Ppx_expect_runtime[1][1], "command_unix/src/command_unix.ml");
   caml_call2(Ppx_inline_test_lib[6], cst_command_unix$0, "command_unix.ml");
   var
    putenv = Core_unix[12],
    unsetenv = Core_unix[13],
    exec = Core_unix[21],
    wait = Core_unix[27],
    getpid = Core_unix[34],
    close = Core_unix[53],
    in_channel_of_descr = Core_unix[60],
    create_process_env = Core_unix[121],
    unsafe_getenv = Sys_unix[10],
    cst_command_unix = cst_command_unix$0,
    cst_Command_unix = cst_Command_unix$0;
   function create_process_env$0(_d_, _c_, _b_){
    return caml_call4(create_process_env, _d_, _c_, _b_, 0);
   }
   function wait$0(pid){caml_call2(wait, 0, [0, 4001835, pid]); return 0;}
   var
    version_list = Version_util[1],
    reprint_build_info = Version_util[8],
    For_unix =
      caml_call1
       (Core_Command_internal[18][7],
        [0,
         [0, [0, Time_float_unix[60]], version_list, reprint_build_info],
         [0, Core_Pid[46]],
         [0],
         [0, Core_thread[2], Core_thread[7]],
         [0,
          [0],
          getpid,
          close,
          in_channel_of_descr,
          putenv,
          unsetenv,
          unsafe_getenv,
          exec,
          [0],
          create_process_env$0,
          wait$0]]),
    run = For_unix[3],
    shape = For_unix[1],
    run$0 = For_unix[4],
    Deprecated = [0, run$0],
    help_text = For_unix[2],
    Shape = [0, help_text];
   caml_call1(Ppx_inline_test_lib[7], cst_command_unix);
   caml_call1(Ppx_expect_runtime[1][2], 0);
   caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2], 0);
   caml_call1(Ppx_module_timer_runtime[5], cst_Command_unix);
   var
    _a_ = Core_Command_internal[18][4],
    Command_unix =
      [0, run, [0, _a_[2], _a_[3], _a_[4]], Shape, shape, Deprecated];
   runtime.caml_register_global(18, Command_unix, cst_Command_unix$0);
   return;
  }
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJjb21tYW5kX3VuaXguY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbInVuc2FmZV9nZXRlbnYiLCJjcmVhdGVfcHJvY2Vzc19lbnYkMCIsIndhaXQkMCIsInBpZCIsInJ1biIsInNoYXBlIiwicnVuJDAiLCJoZWxwX3RleHQiXSwic291cmNlcyI6WyIvaG9tZS9saWFtLWNhcnBlbnRlci8ub3BhbS9wZXJzb25hbC1zaXRlL2xpYi9jb3JlX3VuaXgvY29tbWFuZF91bml4L2NvbW1hbmRfdW5peC5tbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0c7Ozs7O0c7Ozs7O0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBV1FBOzs7WUFDQUM7STs7WUFDQUMsT0FBS0MsS0FBYyxpQ0FBZEEsT0FBYyxTQUEyQztHQVlsRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBZFpIOzs7VUFDQUM7VUFDQUM7SUFTSkU7SUFDQUM7SUFHRUM7SUFEYyxpQkFDZEE7SUFJQUM7SUFEUyxZQUNUQTs7Ozs7Ozs7VUFSRkgseUNBQ0FDOzs7RSIsInNvdXJjZXNDb250ZW50IjpbIm9wZW4hIENvcmVcbm1vZHVsZSBQYXRoID0gQ29tbWFuZC5Qcml2YXRlLlBhdGhcblxubW9kdWxlIEZvcl91bml4ID0gQ29tbWFuZC5Qcml2YXRlLkZvcl91bml4IChzdHJ1Y3RcbiAgbW9kdWxlIFBpZCA9IFBpZFxuICBtb2R1bGUgU2lnbmFsID0gU2lnbmFsXG4gIG1vZHVsZSBUaHJlYWQgPSBDb3JlX3RocmVhZFxuXG4gIG1vZHVsZSBVbml4ID0gc3RydWN0XG4gICAgaW5jbHVkZSBDb3JlX3VuaXhcblxuICAgIGxldCB1bnNhZmVfZ2V0ZW52ID0gU3lzX3VuaXgudW5zYWZlX2dldGVudlxuICAgIGxldCBjcmVhdGVfcHJvY2Vzc19lbnYgPSBjcmVhdGVfcHJvY2Vzc19lbnYgP3NldHBnaWQ6Tm9uZVxuICAgIGxldCB3YWl0IHBpZCA9IGlnbm9yZSAod2FpdCAoYFBpZCBwaWQpIDogUGlkLnQgKiBFeGl0X29yX3NpZ25hbC50KVxuICBlbmRcblxuICBtb2R1bGUgVmVyc2lvbl91dGlsID0gc3RydWN0XG4gICAgaW5jbHVkZSBWZXJzaW9uX3V0aWxcbiAgICBtb2R1bGUgVGltZSA9IFRpbWVfZmxvYXRfdW5peFxuICBlbmRcbmVuZClcblxubGV0IHJ1biA9IEZvcl91bml4LnJ1blxubGV0IHNoYXBlID0gRm9yX3VuaXguc2hhcGVcblxubW9kdWxlIERlcHJlY2F0ZWQgPSBzdHJ1Y3RcbiAgbGV0IHJ1biA9IEZvcl91bml4LmRlcHJlY2F0ZWRfcnVuXG5lbmRcblxubW9kdWxlIFNoYXBlID0gc3RydWN0XG4gIGxldCBoZWxwX3RleHQgPSBGb3JfdW5peC5oZWxwX2Zvcl9zaGFwZVxuZW5kXG4iXX0=
