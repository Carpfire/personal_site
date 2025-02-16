// Generated by js_of_ocaml
//# buildInfo:effects=false, kind=cma, use-js-string=true, version=5.6.0

//# unitInfo: Provides: Dream__unix
(function
  (globalThis){
   "use strict";
   var runtime = globalThis.jsoo_runtime, Dream_unix = [0];
   runtime.caml_register_global(0, Dream_unix, "Dream__unix");
   return;
  }
  (globalThis));

//# unitInfo: Provides: Dream__unix__Static
//# unitInfo: Requires: Dream__server__Router, Dream_pure__Formats, Dream_pure__Message, Dream_pure__Method, Dream_pure__Stream, Lwt, Lwt_io, Magic_mime, Stdlib__Filename, Stdlib__List, Stdlib__String
(function
  (globalThis){
   "use strict";
   var
    runtime = globalThis.jsoo_runtime,
    cst_Content_Type$2 = "Content-Type",
    caml_maybe_attach_backtrace = runtime.caml_maybe_attach_backtrace,
    caml_string_equal = runtime.caml_string_equal,
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
   function caml_call3(f, a0, a1, a2){
    return (f.l >= 0 ? f.l : f.l = f.length) == 3
            ? f(a0, a1, a2)
            : runtime.caml_call_gen(f, [a0, a1, a2]);
   }
   function caml_call5(f, a0, a1, a2, a3, a4){
    return (f.l >= 0 ? f.l : f.l = f.length) == 5
            ? f(a0, a1, a2, a3, a4)
            : runtime.caml_call_gen(f, [a0, a1, a2, a3, a4]);
   }
   var
    global_data = runtime.caml_get_global_data(),
    Dream_pure_Message = global_data.Dream_pure__Message,
    Magic_mime = global_data.Magic_mime,
    Lwt = global_data.Lwt,
    Dream_pure_Method = global_data.Dream_pure__Method,
    Dream_pure_Stream = global_data.Dream_pure__Stream,
    Stdlib_String = global_data.Stdlib__String,
    Dream_server_Router = global_data.Dream__server__Router,
    Stdlib_List = global_data.Stdlib__List,
    Stdlib_Filename = global_data.Stdlib__Filename,
    Lwt_io = global_data.Lwt_io,
    Dream_pure_Formats = global_data.Dream_pure__Formats,
    cst_Content_Type$0 = cst_Content_Type$2,
    cst_Content_Type$1 = cst_Content_Type$2,
    _c_ = [0, -36502890],
    _b_ = [0, -36502890],
    _a_ = [0, -36502890],
    cst_Content_Type = cst_Content_Type$2;
   function mime_lookup(filename){
    var
     content_type = caml_call2(Magic_mime[1], 0, filename),
     content_type$0 =
       runtime.caml_string_notequal(content_type, "text/html")
        ? content_type
        : Dream_pure_Formats[13];
    return [0, [0, cst_Content_Type, content_type$0], 0];
   }
   function from_filesystem(local_root, path, param){
    var file = caml_call2(Stdlib_Filename[4], local_root, path);
    function _r_(exn){
     var
      _A_ =
        caml_call5
         (Dream_pure_Message[6],
          _a_,
          0,
          0,
          Dream_pure_Stream[8],
          Dream_pure_Stream[7]);
     return caml_call1(Lwt[4], _A_);
    }
    function _s_(param){
     function _t_(channel){
      var ppx_lwt_0 = caml_call2(Lwt_io[35], 0, channel);
      function _u_(content){
       var
        _w_ = Dream_pure_Stream[7],
        _x_ = caml_call1(Dream_pure_Stream[9], content),
        _y_ = [0, mime_lookup(path)],
        _z_ = caml_call5(Dream_pure_Message[6], 0, 0, _y_, _x_, _w_);
       return caml_call1(Lwt[4], _z_);
      }
      function _v_(exn){
       try{throw caml_maybe_attach_backtrace(exn, 0);}
       catch(exn){var exn$0 = caml_wrap_exception(exn); return exn$0;}
      }
      return caml_call3(Lwt[81], _v_, ppx_lwt_0, _u_);
     }
     return caml_call1(caml_call5(Lwt_io[68], 0, 0, 0, 0, file), _t_);
    }
    return caml_call2(Lwt[7], _s_, _r_);
   }
   function validate_path(request){
    var path = caml_call1(Dream_server_Router[15], request);
    function has_slash(component){
     return caml_call2(Stdlib_String[15], component, 47);
    }
    function has_backslash(component){
     return caml_call2(Stdlib_String[15], component, 92);
    }
    var
     has_slash$0 = caml_call2(Stdlib_List[34], has_slash, path),
     has_backslash$0 = caml_call2(Stdlib_List[34], has_backslash, path),
     _j_ = Stdlib_Filename[1];
    function _k_(_q_){return caml_string_equal(_j_, _q_);}
    var
     has_dot = caml_call2(Stdlib_List[34], _k_, path),
     _l_ = Stdlib_Filename[2];
    function _m_(_p_){return caml_string_equal(_l_, _p_);}
    var has_dotdot = caml_call2(Stdlib_List[34], _m_, path);
    function _n_(_o_){return caml_string_equal("", _o_);}
    var
     has_empty = caml_call2(Stdlib_List[34], _n_, path),
     is_empty = 0 === path ? 1 : 0;
    if
     (!
      has_slash$0
      &&
       !
       has_backslash$0
       && ! has_dot && ! has_dotdot && ! has_empty && ! is_empty){
     var path$0 = caml_call2(Stdlib_String[7], Stdlib_Filename[3], path);
     return caml_call1(Stdlib_Filename[5], path$0) ? [0, path$0] : 0;
    }
    return 0;
   }
   function static$0(opt, local_root, request){
    if(opt) var sth = opt[1], loader = sth; else var loader = from_filesystem;
    var _d_ = caml_call1(Dream_pure_Message[2], request);
    if(! caml_call2(Dream_pure_Method[4], _d_, 3546230)){
     var
      _h_ =
        caml_call5
         (Dream_pure_Message[6],
          _c_,
          0,
          0,
          Dream_pure_Stream[8],
          Dream_pure_Stream[7]);
     return caml_call1(Lwt[4], _h_);
    }
    var match = validate_path(request);
    if(match){
     var
      path = match[1],
      ppx_lwt_0 = caml_call3(loader, local_root, path, request),
      _e_ =
        function(response){
         if
          (1
           - caml_call2(Dream_pure_Message[12], response, cst_Content_Type$0)){
          var match = caml_call1(Dream_pure_Message[7], response);
          a:
          b:
          if(typeof match === "number"){
           if(42915579 <= match){
            if
             (769530875 !== match && 1063161673 !== match && 42915580 <= match)
             break b;
           }
           else if(-915700886 !== match && 17692 !== match) break b;
           var _i_ = caml_call2(Magic_mime[1], 0, path);
           caml_call3
            (Dream_pure_Message[13], response, cst_Content_Type$1, _i_);
           break a;
          }
         }
         return caml_call1(Lwt[4], response);
        },
      _f_ =
        function(exn){
         try{throw caml_maybe_attach_backtrace(exn, 0);}
         catch(exn){var exn$0 = caml_wrap_exception(exn); return exn$0;}
        };
     return caml_call3(Lwt[81], _f_, ppx_lwt_0, _e_);
    }
    var
     _g_ =
       caml_call5
        (Dream_pure_Message[6],
         _b_,
         0,
         0,
         Dream_pure_Stream[8],
         Dream_pure_Stream[7]);
    return caml_call1(Lwt[4], _g_);
   }
   var
    Dream_unix_Static =
      [0, mime_lookup, from_filesystem, validate_path, static$0];
   runtime.caml_register_global(19, Dream_unix_Static, "Dream__unix__Static");
   return;
  }
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJkcmVhbV9fdW5peC5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOlsibWltZV9sb29rdXAiLCJmaWxlbmFtZSIsImNvbnRlbnRfdHlwZSIsImNvbnRlbnRfdHlwZSQwIiwiZnJvbV9maWxlc3lzdGVtIiwibG9jYWxfcm9vdCIsInBhdGgiLCJmaWxlIiwiZXhuIiwiY2hhbm5lbCIsInBweF9sd3RfMCIsImNvbnRlbnQiLCJleG4kMCIsInZhbGlkYXRlX3BhdGgiLCJyZXF1ZXN0IiwiaGFzX3NsYXNoIiwiY29tcG9uZW50IiwiaGFzX2JhY2tzbGFzaCIsImhhc19zbGFzaCQwIiwiaGFzX2JhY2tzbGFzaCQwIiwiaGFzX2RvdCIsImhhc19kb3Rkb3QiLCJoYXNfZW1wdHkiLCJpc19lbXB0eSIsInBhdGgkMCIsInN0YXRpYyQwIiwib3B0Iiwic3RoIiwibG9hZGVyIiwicmVzcG9uc2UiXSwic291cmNlcyI6WyIvaG9tZS9saWFtLWNhcnBlbnRlci8ub3BhbS9wZXJzb25hbC1zaXRlL2xpYi9kcmVhbS91bml4L3N0YXRpYy5tbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztFOzs7Ozs7Ozs7Ozs7OztHOzs7OztHOzs7OztHOzs7OztHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQklBLFlBQVlDO0lBQ2Q7S0FHSUMsZUFGSSw2QkFGTUQ7S0FDVkU7b0NBR0FEO1VBQUFBOztJQUVKLGlDQUxJQztHQUswQjtZQUU1QkMsZ0JBQWdCQyxZQUFXQztJQUNsQixJQUFQQyxPQUFPLCtCQURPRixZQUFXQztJQUU3QixhQU9PRTtLQUNIOztRQUFBOzs7Ozs7O0tBQUEsT0FBQTtJQUNhOztrQkFQNEJDO01BQ3JCLElBQUFDLFlBQUEsMEJBRHFCRDttQkFDL0JFO09BQ1I7O1FBQzhCLE1BQUEsaUNBRnRCQTtRQUVHLFVBZmZYLFlBUTJCTTtRQU12QixNQUFBO09BQUEsT0FBQTtNQUVhO21CQUhiRTtPQUFBLElBQUEsTUFBQSw0QkFBQUE7YUFBQUEsU0FBQUksNEJBQUFKLE1BQUEsT0FBQUk7TUFHYTtNQUhiLE9BQUEseUJBQWtCRjtLQUdMO0tBSnFCLE9BQUEsV0FBNUIsbUNBSFJIO0lBT2dCO0lBQ2xCLE9BQUE7R0FFZ0I7WUFRaEJNLGNBQWNDO0lBQ0wsSUFBUFIsT0FBTyxvQ0FES1E7SUFHaEIsU0FBSUMsVUFBVUM7S0FBWSxPQUFBLDhCQUFaQTtJQUF5QztJQUN2RCxTQUFJQyxjQUFjRDtLQUFZLE9BQUEsOEJBQVpBO0lBQTBDO0lBQzVDO0tBQVpFLGNBQVksNEJBRlpILFdBRkFUO0tBS0FhLGtCQUFnQiw0QkFGaEJGLGVBSEFYO0tBTUo7SUFBMEIsa0I7SUFBWjtLQUFWYyxVQUFVLGlDQU5WZDtLQU9KO0lBQTZCLGtCO0lBQVosSUFBYmUsYUFBYSxpQ0FQYmY7SUFRd0Isa0I7SUFBWjtLQUFaZ0IsWUFBWSxpQ0FSWmhCO0tBU0FpQixpQkFUQWpCOzs7TUFJQVk7OztPQUNBQztZQUNBQyxhQUNBQyxnQkFDQUMsZUFDQUM7S0FXUyxJQUFQQyxTQUFPLGlEQXBCVGxCO0tBcUJDLE9BQUEsK0JBRENrQixjQUFBQTs7SUFISjtHQU9NO1lBRU5DLFNBQVNDLEtBQTBCckIsWUFBaUJTO0lBRXRELEdBRldZLFNBQVNDLE1BQVRELFFBQUFFLFNBQVNELGNBQVRDLFNBOUNUeEI7SUFnRDZCLFVBQUEsa0NBRnVCVTtJQUU1QyxLQUFBO0tBQ1I7O1FBQUE7Ozs7Ozs7S0FBQSxPQUFBOztJQUlNLFlBbENORCxjQTJCb0RDOztLQWEvQjtNQURkUjtNQUNjSSxZQUFBLFdBYlprQixRQUEwQnZCLFlBWTVCQyxNQVo2Q1E7TUFhbEQ7aUJBQVFlO1NBQ1I7O2FBQU8sbUNBRENBO1VBRUEsWUFBQSxrQ0FGQUE7Ozs7Ozs7Ozs7V0FRdUMsVUFBQSw2QkFUMUN2QjtXQVNEO3FDQVJJdUI7Ozs7U0FZUixPQUFBLG1CQVpRQTtRQVlXOztpQkFabkJyQjtTQUFBLElBQUEsTUFBQSw0QkFBQUE7ZUFBQUEsU0FBQUksNEJBQUFKLE1BQUEsT0FBQUk7UUFZbUI7S0FabkIsT0FBQSx5QkFBbUJGOztJQUpuQjs7T0FBQTs7Ozs7OztJQUFBLE9BQUE7R0FnQm1COzs7VUEvRXJCVixhQVFBSSxpQkFtQkFTLGVBMkJBWTs7O0UiLCJzb3VyY2VzQ29udGVudCI6WyIoKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBEcmVhbSwgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLiBTZWUgTElDRU5TRS5tZFxuICAgZm9yIGRldGFpbHMsIG9yIHZpc2l0IGh0dHBzOi8vZ2l0aHViLmNvbS9hYW50cm9uL2RyZWFtLlxuXG4gICBDb3B5cmlnaHQgMjAyMSBBbnRvbiBCYWNoaW4gKilcblxuXG5cbm1vZHVsZSBGb3JtYXRzID0gRHJlYW1fcHVyZS5Gb3JtYXRzXG5tb2R1bGUgTWVzc2FnZSA9IERyZWFtX3B1cmUuTWVzc2FnZVxubW9kdWxlIE1ldGhvZCA9IERyZWFtX3B1cmUuTWV0aG9kXG5tb2R1bGUgUm91dGVyID0gRHJlYW1fX3NlcnZlci5Sb3V0ZXJcbm1vZHVsZSBTdHJlYW0gPSBEcmVhbV9wdXJlLlN0cmVhbVxuXG5cblxuKCogVE9ETyBOb3QgYXQgYWxsIGVmZmljaWVudDsgY2FuIGF0IGxlYXN0IHN0cmVhbSB0aGUgZmlsZSwgbWF5YmUgZXZlbiBjYWNoZS4gKilcbigqIFRPRE8gQWxzbyBtaW5kIG5ld2xpbmVzIG9uIFdpbmRvd3MuICopXG4oKiBUT0RPIE5PVEUgVXNpbmcgTHd0X2lvIGJlY2F1c2UgaXQgaGFzIGEgbmljZSBcInJlYWQgdGhlIHdob2xlIHRoaW5nXCJcbiAgIGZ1bmN0aW9uLiAqKVxuXG5sZXQgbWltZV9sb29rdXAgZmlsZW5hbWUgPVxuICBsZXQgY29udGVudF90eXBlID1cbiAgICBtYXRjaCBNYWdpY19taW1lLmxvb2t1cCBmaWxlbmFtZSB3aXRoXG4gICAgfCBcInRleHQvaHRtbFwiIC0+IEZvcm1hdHMudGV4dF9odG1sXG4gICAgfCBjb250ZW50X3R5cGUgLT4gY29udGVudF90eXBlXG4gIGluXG4gIFtcIkNvbnRlbnQtVHlwZVwiLCBjb250ZW50X3R5cGVdXG5cbmxldCBmcm9tX2ZpbGVzeXN0ZW0gbG9jYWxfcm9vdCBwYXRoIF8gPVxuICBsZXQgZmlsZSA9IEZpbGVuYW1lLmNvbmNhdCBsb2NhbF9yb290IHBhdGggaW5cbiAgTHd0LmNhdGNoXG4gICAgKGZ1biAoKSAtPlxuICAgICAgTHd0X2lvLih3aXRoX2ZpbGUgfm1vZGU6SW5wdXQgZmlsZSkgKGZ1biBjaGFubmVsIC0+XG4gICAgICAgIGxldCVsd3QgY29udGVudCA9IEx3dF9pby5yZWFkIGNoYW5uZWwgaW5cbiAgICAgICAgTWVzc2FnZS5yZXNwb25zZVxuICAgICAgICAgIH5oZWFkZXJzOihtaW1lX2xvb2t1cCBwYXRoKSAoU3RyZWFtLnN0cmluZyBjb250ZW50KSBTdHJlYW0ubnVsbFxuICAgICAgICB8PiBMd3QucmV0dXJuKSlcbiAgICAoZnVuIF9leG4gLT5cbiAgICAgIE1lc3NhZ2UucmVzcG9uc2UgfnN0YXR1czpgTm90X0ZvdW5kIFN0cmVhbS5lbXB0eSBTdHJlYW0ubnVsbFxuICAgICAgfD4gTHd0LnJldHVybilcblxuKCogVE9ETyBBZGQgRVRhZyBoYW5kbGluZy4gKilcbigqIFRPRE8gQWRkIENvbnRlbnQtTGVuZ3RoIGhhbmRsaW5nPyAqKVxuKCogVE9ETyBTdXBwb3J0IEhFQUQgcmVxdWVzdHM/ICopXG5cbigqIFRPRE8gT24gV2luZG93cywgc2hvdWxkIHdlIGFsc28gY2hlY2sgZm9yIFxcIGFuZCBkcml2ZSBsZXR0ZXJzPyAqKVxuKCogVE9ETyBOb3QgYW4gZWZmaWNpZW50IGltcGxlbWVudGF0aW9uIGF0IHRoZSBtb21lbnQuICopXG5sZXQgdmFsaWRhdGVfcGF0aCByZXF1ZXN0ID1cbiAgbGV0IHBhdGggPSBSb3V0ZXIucGF0aCByZXF1ZXN0IGluXG5cbiAgbGV0IGhhc19zbGFzaCBjb21wb25lbnQgPSBTdHJpbmcuY29udGFpbnMgY29tcG9uZW50ICcvJyBpblxuICBsZXQgaGFzX2JhY2tzbGFzaCBjb21wb25lbnQgPSBTdHJpbmcuY29udGFpbnMgY29tcG9uZW50ICdcXFxcJyBpblxuICBsZXQgaGFzX3NsYXNoID0gTGlzdC5leGlzdHMgaGFzX3NsYXNoIHBhdGggaW5cbiAgbGV0IGhhc19iYWNrc2xhc2ggPSBMaXN0LmV4aXN0cyBoYXNfYmFja3NsYXNoIHBhdGggaW5cbiAgbGV0IGhhc19kb3QgPSBMaXN0LmV4aXN0cyAoKD0pIEZpbGVuYW1lLmN1cnJlbnRfZGlyX25hbWUpIHBhdGggaW5cbiAgbGV0IGhhc19kb3Rkb3QgPSBMaXN0LmV4aXN0cyAoKD0pIEZpbGVuYW1lLnBhcmVudF9kaXJfbmFtZSkgcGF0aCBpblxuICBsZXQgaGFzX2VtcHR5ID0gTGlzdC5leGlzdHMgKCg9KSBcIlwiKSBwYXRoIGluXG4gIGxldCBpc19lbXB0eSA9IHBhdGggPSBbXSBpblxuXG4gIGlmIGhhc19zbGFzaCB8fFxuICAgICBoYXNfYmFja3NsYXNoIHx8XG4gICAgIGhhc19kb3QgfHxcbiAgICAgaGFzX2RvdGRvdCB8fFxuICAgICBoYXNfZW1wdHkgfHxcbiAgICAgaXNfZW1wdHkgdGhlblxuICAgIE5vbmVcblxuICBlbHNlXG4gICAgbGV0IHBhdGggPSBTdHJpbmcuY29uY2F0IEZpbGVuYW1lLmRpcl9zZXAgcGF0aCBpblxuICAgIGlmIEZpbGVuYW1lLmlzX3JlbGF0aXZlIHBhdGggdGhlblxuICAgICAgU29tZSBwYXRoXG4gICAgZWxzZVxuICAgICAgTm9uZVxuXG5sZXQgc3RhdGljID8obG9hZGVyID0gZnJvbV9maWxlc3lzdGVtKSBsb2NhbF9yb290ID0gZnVuIHJlcXVlc3QgLT5cblxuICBpZiBub3QgQEAgTWV0aG9kLm1ldGhvZHNfZXF1YWwgKE1lc3NhZ2UubWV0aG9kXyByZXF1ZXN0KSBgR0VUIHRoZW5cbiAgICBNZXNzYWdlLnJlc3BvbnNlIH5zdGF0dXM6YE5vdF9Gb3VuZCBTdHJlYW0uZW1wdHkgU3RyZWFtLm51bGxcbiAgICB8PiBMd3QucmV0dXJuXG5cbiAgZWxzZVxuICAgIG1hdGNoIHZhbGlkYXRlX3BhdGggcmVxdWVzdCB3aXRoXG4gICAgfCBOb25lIC0+XG4gICAgICBNZXNzYWdlLnJlc3BvbnNlIH5zdGF0dXM6YE5vdF9Gb3VuZCBTdHJlYW0uZW1wdHkgU3RyZWFtLm51bGxcbiAgICAgIHw+IEx3dC5yZXR1cm5cblxuICAgIHwgU29tZSBwYXRoIC0+XG4gICAgICBsZXQlbHd0IHJlc3BvbnNlID0gbG9hZGVyIGxvY2FsX3Jvb3QgcGF0aCByZXF1ZXN0IGluXG4gICAgICBpZiBub3QgKE1lc3NhZ2UuaGFzX2hlYWRlciByZXNwb25zZSBcIkNvbnRlbnQtVHlwZVwiKSB0aGVuIGJlZ2luXG4gICAgICAgIG1hdGNoIE1lc3NhZ2Uuc3RhdHVzIHJlc3BvbnNlIHdpdGhcbiAgICAgICAgfCBgT0tcbiAgICAgICAgfCBgTm9uX0F1dGhvcml0YXRpdmVfSW5mb3JtYXRpb25cbiAgICAgICAgfCBgTm9fQ29udGVudFxuICAgICAgICB8IGBSZXNldF9Db250ZW50XG4gICAgICAgIHwgYFBhcnRpYWxfQ29udGVudCAtPlxuICAgICAgICAgIE1lc3NhZ2UuYWRkX2hlYWRlciByZXNwb25zZSBcIkNvbnRlbnQtVHlwZVwiIChNYWdpY19taW1lLmxvb2t1cCBwYXRoKVxuICAgICAgICB8IF8gLT5cbiAgICAgICAgICAoKVxuICAgICAgZW5kO1xuICAgICAgTHd0LnJldHVybiByZXNwb25zZVxuIl19
