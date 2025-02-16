// Generated by js_of_ocaml
//# buildInfo:effects=false, kind=cma, use-js-string=true, version=5.6.0

//# unitInfo: Provides: Bonsai_web_ui_common_components
//# unitInfo: Requires: Bonsai, Bonsai_web, Core, Core__List, Core__Set, Js_of_ocaml__Dom_html, Ppx_bench_lib__Benchmark_accumulator, Ppx_expect_runtime, Ppx_inline_test_lib, Ppx_module_timer_runtime, Ui_effect, Virtual_dom__Node, Virtual_dom__Vdom
(function
  (globalThis){
   "use strict";
   var
    runtime = globalThis.jsoo_runtime,
    cst_Bonsai_web_ui_common_compo$0 = "Bonsai_web_ui_common_components",
    cst_bonsai_web_ui_common_compo$0 = "bonsai_web_ui_common_components",
    cst_web_ui_common_components_b =
      "web_ui/common_components/bonsai_web_ui_common_components.ml";
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
   var
    global_data = runtime.caml_get_global_data(),
    cst = " \xc3\x97",
    Virtual_dom_Vdom = global_data.Virtual_dom__Vdom,
    Bonsai = global_data.Bonsai,
    Core_Set = global_data.Core__Set,
    Core_List = global_data.Core__List,
    Core = global_data.Core,
    Js_of_ocaml_Dom_html = global_data.Js_of_ocaml__Dom_html,
    Ui_effect = global_data.Ui_effect,
    Bonsai_web = global_data.Bonsai_web,
    Virtual_dom_Node = global_data.Virtual_dom__Node,
    Ppx_module_timer_runtime = global_data.Ppx_module_timer_runtime,
    Ppx_bench_lib_Benchmark_accumu =
      global_data.Ppx_bench_lib__Benchmark_accumulator,
    Ppx_expect_runtime = global_data.Ppx_expect_runtime,
    Ppx_inline_test_lib = global_data.Ppx_inline_test_lib;
   caml_call1(Ppx_module_timer_runtime[4], cst_Bonsai_web_ui_common_compo$0);
   caml_call1
    (Ppx_bench_lib_Benchmark_accumu[1][1], cst_bonsai_web_ui_common_compo$0);
   caml_call1(Ppx_expect_runtime[1][1], cst_web_ui_common_components_b);
   caml_call2
    (Ppx_inline_test_lib[6],
     cst_bonsai_web_ui_common_compo$0,
     "bonsai_web_ui_common_components.ml");
   var
    _b_ = [0, [0, cst_web_ui_common_components_b, 66, 2097, 2103]],
    _c_ = [0, [0, cst_web_ui_common_components_b, 65, 2073, 2077]],
    _d_ = [0, [0, cst_web_ui_common_components_b, 60, 1869, 1875]],
    _e_ = [0, [0, cst_web_ui_common_components_b, 59, 1831, 1835]],
    _f_ = [0, [0, cst_web_ui_common_components_b, 56, 1707, 1713]],
    _g_ = [0, [0, cst_web_ui_common_components_b, 55, 1676, 1680]],
    cst_data_value = "data-value",
    _a_ = [0, [0, cst_web_ui_common_components_b, 15, 241, 245]],
    cst_bonsai_web_ui_common_compo = cst_bonsai_web_ui_common_compo$0,
    cst_Bonsai_web_ui_common_compo = cst_Bonsai_web_ui_common_compo$0;
   function component
   (extra_container_attr,
    extra_pill_attr,
    to_string,
    to_list,
    inject_selected_options,
    remove_option,
    selected_options){
    function _x_(param){
     var
      _C_ = param[2],
      _D_ = _C_[2],
      match = _D_[2],
      to_string = match[2],
      inject_selected_options = match[1],
      selected_options = _D_[1],
      extra_pill_attr = _C_[1],
      extra_container_attr = param[1];
     function pill(option){
      function remove_option$0(event){
       if(caml_call1(Bonsai_web[3], event)) return Bonsai_web[5][1];
       var
        selected_options$0 =
          caml_call2(remove_option, selected_options, option);
       return caml_call1(inject_selected_options, selected_options$0);
      }
      var
       _F_ = caml_call1(to_string, option),
       _G_ = caml_call2(Core[18], _F_, cst),
       _H_ = [0, caml_call1(Virtual_dom_Node[6], _G_), 0],
       _I_ = 0;
      function _J_(ev){
       var match = caml_call1(Js_of_ocaml_Dom_html[26][1], ev);
       a:
       {
        if(44 <= match){
         if(45 === match || 83 === match) break a;
        }
        else if(42 !== match && 40 <= match) break a;
        return Ui_effect[1];
       }
       return remove_option$0(ev);
      }
      var
       _K_ = caml_call1(Virtual_dom_Vdom[1][79], _J_),
       _L_ = caml_call1(Virtual_dom_Vdom[1][61], remove_option$0),
       _M_ = caml_call2(Virtual_dom_Vdom[1][12], _L_, _K_),
       _N_ = caml_call1(to_string, option),
       _O_ = caml_call2(Virtual_dom_Vdom[1][1], cst_data_value, _N_),
       _P_ = caml_call2(Virtual_dom_Vdom[1][12], _O_, _M_),
       _Q_ = caml_call1(Virtual_dom_Vdom[1][42], 0),
       _R_ = caml_call2(Virtual_dom_Vdom[1][12], _Q_, _P_),
       _S_ =
         [0,
          [0, caml_call2(Virtual_dom_Vdom[1][12], extra_pill_attr, _R_), _I_]];
      return caml_call3(Virtual_dom_Node[42], 0, _S_, _H_);
     }
     var selected_options$0 = caml_call1(to_list, selected_options);
     if(! selected_options$0) return Virtual_dom_Node[4];
     var _E_ = caml_call2(Core_List[51], selected_options$0, pill);
     return caml_call3
             (Virtual_dom_Node[17], 0, [0, [0, extra_container_attr, 0]], _E_);
    }
    var
     _y_ = caml_call2(Bonsai[49][5][7], inject_selected_options, to_string),
     _z_ = caml_call2(Bonsai[49][5][7], selected_options, _y_),
     _A_ = caml_call2(Bonsai[49][5][7], extra_pill_attr, _z_),
     _B_ = caml_call2(Bonsai[49][5][7], extra_container_attr, _A_);
    return caml_call3(Bonsai[49][5][8], _a_, _B_, _x_);
   }
   function of_list
   (opt, _i_, to_string, inject_selected_options, selected_options){
    if(opt)
     var sth = opt[1], extra_container_attr = sth;
    else
     var
      extra_container_attr = caml_call1(Bonsai[2][1], Virtual_dom_Vdom[1][11]);
    if(_i_)
     var sth$0 = _i_[1], extra_pill_attr = sth$0;
    else
     var extra_pill_attr = caml_call1(Bonsai[2][1], Virtual_dom_Vdom[1][11]);
    function _j_(selected_options){
     function _n_(inject_selected_options){
      function _r_(to_string){
       function _u_(selected_options, param){
        var index = param[1];
        function _w_(param){
         var i = param[1];
         return caml_call2(Core[93], i, index);
        }
        return caml_call2(Core_List[12], selected_options, _w_);
       }
       return component
               (extra_container_attr,
                extra_pill_attr,
                to_string,
                function(_v_){return _v_;},
                inject_selected_options,
                _u_,
                selected_options);
      }
      function _s_(to_string, param){
       var option = param[2];
       return caml_call1(to_string, option);
      }
      var _t_ = caml_call3(Bonsai[49][5][8], _b_, to_string, _s_);
      return caml_call3(Bonsai[49][5][1], _c_, _t_, _r_);
     }
     function _o_(inject_selected_options, selected_options){
      function _q_(param){var option = param[2]; return option;}
      return caml_call1
              (inject_selected_options,
               caml_call2(Core_List[51], selected_options, _q_));
     }
     var
      _p_ = caml_call3(Bonsai[49][5][8], _d_, inject_selected_options, _o_);
     return caml_call3(Bonsai[49][5][1], _e_, _p_, _n_);
    }
    function _k_(selected_options){
     function _m_(i, option){return [0, i, option];}
     return caml_call2(Core_List[41], selected_options, _m_);
    }
    var _l_ = caml_call3(Bonsai[49][5][8], _f_, selected_options, _k_);
    return caml_call3(Bonsai[49][5][1], _g_, _l_, _j_);
   }
   function of_set
   (opt, _h_, to_string, inject_selected_options, selected_options){
    if(opt)
     var sth = opt[1], extra_container_attr = sth;
    else
     var
      extra_container_attr = caml_call1(Bonsai[2][1], Virtual_dom_Vdom[1][11]);
    if(_h_)
     var sth$0 = _h_[1], extra_pill_attr = sth$0;
    else
     var extra_pill_attr = caml_call1(Bonsai[2][1], Virtual_dom_Vdom[1][11]);
    return component
            (extra_container_attr,
             extra_pill_attr,
             to_string,
             Core_Set[39],
             inject_selected_options,
             Core_Set[13],
             selected_options);
   }
   caml_call1(Ppx_inline_test_lib[7], cst_bonsai_web_ui_common_compo);
   caml_call1(Ppx_expect_runtime[1][2], 0);
   caml_call1(Ppx_bench_lib_Benchmark_accumu[1][2], 0);
   caml_call1(Ppx_module_timer_runtime[5], cst_Bonsai_web_ui_common_compo);
   var Bonsai_web_ui_common_component = [0, [0, of_list, of_set]];
   runtime.caml_register_global
    (29, Bonsai_web_ui_common_component, cst_Bonsai_web_ui_common_compo$0);
   return;
  }
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJib25zYWlfd2ViX3VpX2NvbW1vbl9jb21wb25lbnRzLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6WyJjb21wb25lbnQiLCJleHRyYV9jb250YWluZXJfYXR0ciIsImV4dHJhX3BpbGxfYXR0ciIsInRvX3N0cmluZyIsInRvX2xpc3QiLCJpbmplY3Rfc2VsZWN0ZWRfb3B0aW9ucyIsInJlbW92ZV9vcHRpb24iLCJzZWxlY3RlZF9vcHRpb25zIiwicGlsbCIsIm9wdGlvbiIsInJlbW92ZV9vcHRpb24kMCIsImV2ZW50Iiwic2VsZWN0ZWRfb3B0aW9ucyQwIiwiZXYiLCJvZl9saXN0Iiwib3B0Iiwic3RoIiwic3RoJDAiLCJpbmRleCIsImkiLCJvZl9zZXQiXSwic291cmNlcyI6WyIvaG9tZS9saWFtLWNhcnBlbnRlci8ub3BhbS9wZXJzb25hbC1zaXRlL2xpYi9ib25zYWkvd2ViX3VpX2NvbW1vbl9jb21wb25lbnRzL2JvbnNhaV93ZWJfdWlfY29tbW9uX2NvbXBvbmVudHMubWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0c7Ozs7O0c7Ozs7O0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS01BO0lBQ0RDO0lBQ0FDO0lBQ0FDO0lBQ0FDO0lBQ0FDO0lBQ0FDO0lBQ0RDOzs7Ozs7TUFNSUo7TUFEQUU7TUFEQUU7TUFEQUw7TUFESUQ7Y0FLSk8sS0FBS0M7ZUFDSEMsZ0JBQWNDO09BQ2hCLEdBQUcsMEJBRGFBO09BSVM7UUFBbkJDO1VBQW1CLFdBYjVCTixlQUtHQyxrQkFHS0U7T0FNSCxPQUFBLFdBUkZKLHlCQU9NTztNQUNxQztNQWN6QjtPQUFBLE1BQUEsV0FyQmxCVCxXQUNLTTtPQW9CWSxNQUFBO09BQWpCLFVBQUU7T0FBRjttQkFMc0JJO09BQ04sWUFBQSx3Q0FETUE7Ozs7Ozs7UUFHTDs7T0FEK0MsT0FoQjlESCxnQkFjb0JHO01BR1c7TUFIekI7T0FBQSxNQUFBO09BREEsTUFBQSxvQ0FiTkg7T0FhTSxNQUFBO09BRG9CLE1BQUEsV0FkNUJQLFdBQ0tNO09BYUcsTUFBQTtPQUFBLE1BQUE7T0FEQSxNQUFBO09BQUEsTUFBQTtPQUZOOztjQUNJLG9DQWZOUDtNQXdCQSxPQUFBO0tBQTZDO0tBRTNDLElBRUpVLHFCQUZJLFdBaENMUixTQU9HRztVQTJCRkssb0JBRE07S0FFd0MsVUFBQSwwQkFEOUNBLG9CQXhCRUo7S0F5QjRDLE9BQUE7K0NBOUJ4Q1A7Ozt3Q0FKUEkseUJBRkFGO3dDQUlESTt3Q0FMQ0w7d0NBREFEOzs7WUF5Q0NhO0lBQ0FDLFVBRURaLFdBQ0FFLHlCQUNERTtJLEdBSkVRO1NBQXVCQyxNQUF2QkQsUUFBQWQsdUJBQXVCZTs7O01BQXZCZix1QkFBdUI7O1NBQ0xnQixnQkFBbEJmLGtCQUFrQmU7O1NBQWxCZixrQkFBa0I7aUJBS1pLO2tCQUlBRjttQkFNQUY7b0JBVWNJO1FBQUwsSUFBdUJXO1FBQ3BDO1NBQWdDLElBQU1DO1NBQVMsT0FBQSxxQkFBVEEsR0FERkQ7UUFDc0I7UUFBMUIsT0FBQSwwQkFEZFg7T0FDeUM7Y0F0RTdEUDtnQkEyQ0FDO2dCQUNBQztnQkFlTUM7OEI7Z0JBTkFFOztnQkFKQUU7TUFzQlU7bUJBWFJKO1dBQ0FNO09BQVcsT0FBQSxXQURYTixXQUNBTTs7a0RBaEJUTjs7O2tCQVNTRSx5QkFDSkU7TUFDRixvQkFBNkIsSUFBU0UsbUJBQVcsT0FBWEEsT0FBa0I7TUFBeEQsT0FBQTtlQUZNSjtlQUVOLDBCQURFRTtLQUV3Qjs7OENBWDdCRjs7O2lCQUlTRTtLQUNSLGFBQW1DWSxHQUFFVixRQUFVLFdBQVpVLEdBQUVWLFFBQW1CO0tBQTFCLE9BQUEsMEJBRHRCRjtJQUNpRDtnREFKM0RBOzs7WUEyQkVhO0lBQ0FMLFVBRURaLFdBQ0FFLHlCQUNERTtJQUVBLEdBTkVRO1NBQXVCQyxNQUF2QkQsUUFBQWQsdUJBQXVCZTs7O01BQXZCZix1QkFBdUI7SUFNekI7U0FMb0JnQixnQkFBbEJmLGtCQUFrQmU7O1NBQWxCZixrQkFBa0I7SUFLcEIsT0FqRkVGO2FBMkVBQzthQUNBQzthQUNEQzs7YUFDQUU7O2FBQ0RFO0dBU2tCOzs7OztnREE5Q2hCTyxTQWdDQU07Ozs7RSIsInNvdXJjZXNDb250ZW50IjpbIm9wZW4hIENvcmVcbm9wZW4hIEJvbnNhaV93ZWJcbm9wZW4hIEJvbnNhaS5MZXRfc3ludGF4XG5cbm1vZHVsZSBQaWxscyA9IHN0cnVjdFxuICBsZXQgY29tcG9uZW50XG4gICAgfmV4dHJhX2NvbnRhaW5lcl9hdHRyXG4gICAgfmV4dHJhX3BpbGxfYXR0clxuICAgIH50b19zdHJpbmdcbiAgICB+dG9fbGlzdFxuICAgIH5pbmplY3Rfc2VsZWN0ZWRfb3B0aW9uc1xuICAgIH5yZW1vdmVfb3B0aW9uXG4gICAgc2VsZWN0ZWRfb3B0aW9uc1xuICAgID1cbiAgICBsZXQlYXJyIGV4dHJhX2NvbnRhaW5lcl9hdHRyID0gZXh0cmFfY29udGFpbmVyX2F0dHJcbiAgICBhbmQgZXh0cmFfcGlsbF9hdHRyID0gZXh0cmFfcGlsbF9hdHRyXG4gICAgYW5kIHNlbGVjdGVkX29wdGlvbnMgPSBzZWxlY3RlZF9vcHRpb25zXG4gICAgYW5kIGluamVjdF9zZWxlY3RlZF9vcHRpb25zID0gaW5qZWN0X3NlbGVjdGVkX29wdGlvbnNcbiAgICBhbmQgdG9fc3RyaW5nID0gdG9fc3RyaW5nIGluXG4gICAgbGV0IHBpbGwgb3B0aW9uID1cbiAgICAgIGxldCByZW1vdmVfb3B0aW9uIGV2ZW50ID1cbiAgICAgICAgaWYgQm9uc2FpX3dlYi5hbV93aXRoaW5fZGlzYWJsZWRfZmllbGRzZXQgZXZlbnRcbiAgICAgICAgdGhlbiBFZmZlY3QuSWdub3JlXG4gICAgICAgIGVsc2UgKFxuICAgICAgICAgIGxldCBzZWxlY3RlZF9vcHRpb25zID0gcmVtb3ZlX29wdGlvbiBzZWxlY3RlZF9vcHRpb25zIG9wdGlvbiBpblxuICAgICAgICAgIGluamVjdF9zZWxlY3RlZF9vcHRpb25zIHNlbGVjdGVkX29wdGlvbnMpXG4gICAgICBpblxuICAgICAgVmRvbS5Ob2RlLnNwYW5cbiAgICAgICAgfmF0dHJzOlxuICAgICAgICAgIFsgVmRvbS5BdHRyLihcbiAgICAgICAgICAgICAgZXh0cmFfcGlsbF9hdHRyXG4gICAgICAgICAgICAgIEAgdGFiaW5kZXggMFxuICAgICAgICAgICAgICBAIGNyZWF0ZSBcImRhdGEtdmFsdWVcIiAodG9fc3RyaW5nIG9wdGlvbilcbiAgICAgICAgICAgICAgQCBvbl9jbGljayByZW1vdmVfb3B0aW9uXG4gICAgICAgICAgICAgIEAgb25fa2V5dXAgKGZ1biBldiAtPlxuICAgICAgICAgICAgICAgICAgbWF0Y2ggSnNfb2Zfb2NhbWwuRG9tX2h0bWwuS2V5Ym9hcmRfY29kZS5vZl9ldmVudCBldiB3aXRoXG4gICAgICAgICAgICAgICAgICB8IFNwYWNlIHwgRW50ZXIgfCBOdW1wYWRFbnRlciB8IEJhY2tzcGFjZSB8IERlbGV0ZSAtPiByZW1vdmVfb3B0aW9uIGV2XG4gICAgICAgICAgICAgICAgICB8IF8gLT4gVWlfZWZmZWN0Lklnbm9yZSkpXG4gICAgICAgICAgXVxuICAgICAgICBbIFZkb20uTm9kZS50ZXh0ICh0b19zdHJpbmcgb3B0aW9uIF4gXCIgw5dcIikgXVxuICAgIGluXG4gICAgbWF0Y2ggdG9fbGlzdCBzZWxlY3RlZF9vcHRpb25zIHdpdGhcbiAgICB8IFtdIC0+IFZkb20uTm9kZS5ub25lXG4gICAgfCBzZWxlY3RlZF9vcHRpb25zIC0+XG4gICAgICBWZG9tLk5vZGUuZGl2IH5hdHRyczpbIGV4dHJhX2NvbnRhaW5lcl9hdHRyIF0gKExpc3QubWFwIHNlbGVjdGVkX29wdGlvbnMgfmY6cGlsbClcbiAgOztcblxuICBsZXQgb2ZfbGlzdFxuICAgID8oZXh0cmFfY29udGFpbmVyX2F0dHIgPSBWYWx1ZS5yZXR1cm4gVmRvbS5BdHRyLmVtcHR5KVxuICAgID8oZXh0cmFfcGlsbF9hdHRyID0gVmFsdWUucmV0dXJuIFZkb20uQXR0ci5lbXB0eSlcbiAgICB+dG9fc3RyaW5nXG4gICAgfmluamVjdF9zZWxlY3RlZF9vcHRpb25zXG4gICAgc2VsZWN0ZWRfb3B0aW9uc1xuICAgID1cbiAgICBsZXQlc3ViIHNlbGVjdGVkX29wdGlvbnMgPVxuICAgICAgbGV0JWFyciBzZWxlY3RlZF9vcHRpb25zID0gc2VsZWN0ZWRfb3B0aW9ucyBpblxuICAgICAgTGlzdC5tYXBpIHNlbGVjdGVkX29wdGlvbnMgfmY6KGZ1biBpIG9wdGlvbiAtPiBpLCBvcHRpb24pXG4gICAgaW5cbiAgICBsZXQlc3ViIGluamVjdF9zZWxlY3RlZF9vcHRpb25zID1cbiAgICAgIGxldCVhcnIgaW5qZWN0X3NlbGVjdGVkX29wdGlvbnMgPSBpbmplY3Rfc2VsZWN0ZWRfb3B0aW9ucyBpblxuICAgICAgZnVuIHNlbGVjdGVkX29wdGlvbnMgLT5cbiAgICAgICAgTGlzdC5tYXAgc2VsZWN0ZWRfb3B0aW9ucyB+ZjooZnVuIChfLCBvcHRpb24pIC0+IG9wdGlvbilcbiAgICAgICAgfD4gaW5qZWN0X3NlbGVjdGVkX29wdGlvbnNcbiAgICBpblxuICAgIGxldCVzdWIgdG9fc3RyaW5nID1cbiAgICAgIGxldCVhcnIgdG9fc3RyaW5nID0gdG9fc3RyaW5nIGluXG4gICAgICBmdW4gKF8sIG9wdGlvbikgLT4gdG9fc3RyaW5nIG9wdGlvblxuICAgIGluXG4gICAgY29tcG9uZW50XG4gICAgICB+ZXh0cmFfY29udGFpbmVyX2F0dHJcbiAgICAgIH5leHRyYV9waWxsX2F0dHJcbiAgICAgIH50b19zdHJpbmdcbiAgICAgIH50b19saXN0OkZuLmlkXG4gICAgICB+aW5qZWN0X3NlbGVjdGVkX29wdGlvbnNcbiAgICAgIH5yZW1vdmVfb3B0aW9uOihmdW4gc2VsZWN0ZWRfb3B0aW9ucyAoaW5kZXgsIF8pIC0+XG4gICAgICAgIExpc3QuZmlsdGVyIHNlbGVjdGVkX29wdGlvbnMgfmY6KGZ1biAoaSwgXykgLT4gaSA8PiBpbmRleCkpXG4gICAgICBzZWxlY3RlZF9vcHRpb25zXG4gIDs7XG5cbiAgbGV0IG9mX3NldFxuICAgID8oZXh0cmFfY29udGFpbmVyX2F0dHIgPSBWYWx1ZS5yZXR1cm4gVmRvbS5BdHRyLmVtcHR5KVxuICAgID8oZXh0cmFfcGlsbF9hdHRyID0gVmFsdWUucmV0dXJuIFZkb20uQXR0ci5lbXB0eSlcbiAgICB+dG9fc3RyaW5nXG4gICAgfmluamVjdF9zZWxlY3RlZF9vcHRpb25zXG4gICAgc2VsZWN0ZWRfb3B0aW9uc1xuICAgID1cbiAgICBjb21wb25lbnRcbiAgICAgIH5leHRyYV9jb250YWluZXJfYXR0clxuICAgICAgfmV4dHJhX3BpbGxfYXR0clxuICAgICAgfnRvX3N0cmluZ1xuICAgICAgfnRvX2xpc3Q6U2V0LnRvX2xpc3RcbiAgICAgIH5pbmplY3Rfc2VsZWN0ZWRfb3B0aW9uc1xuICAgICAgfnJlbW92ZV9vcHRpb246U2V0LnJlbW92ZVxuICAgICAgc2VsZWN0ZWRfb3B0aW9uc1xuICA7O1xuZW5kXG4iXX0=
