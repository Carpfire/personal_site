// Generated by js_of_ocaml
//# buildInfo:effects=false, kind=cma, use-js-string=true, version=5.6.0

//# unitInfo: Provides: Bonsai_web_ui_toggle
//# unitInfo: Requires: Css_gen, Inline_css, Virtual_dom__Node, Virtual_dom__Vdom
(function
  (globalThis){
   "use strict";
   var runtime = globalThis.jsoo_runtime;
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
    Virtual_dom_Node = global_data.Virtual_dom__Node,
    Virtual_dom_Vdom = global_data.Virtual_dom__Vdom,
    Css_gen = global_data.Css_gen,
    Inline_css = global_data.Inline_css,
    span = caml_call1(Virtual_dom_Vdom[1][16], "span_hash_9e179e22c8"),
    left = caml_call1(Virtual_dom_Vdom[1][16], "left_hash_9e179e22c8"),
    container =
      caml_call1(Virtual_dom_Vdom[1][16], "container_hash_9e179e22c8"),
    above = caml_call1(Virtual_dom_Vdom[1][16], "above_hash_9e179e22c8"),
    checkbox = caml_call1(Virtual_dom_Vdom[1][16], "checkbox_hash_9e179e22c8"),
    right = caml_call1(Virtual_dom_Vdom[1][16], "right_hash_9e179e22c8"),
    text = caml_call1(Virtual_dom_Vdom[1][16], "text_hash_9e179e22c8"),
    label = caml_call1(Virtual_dom_Vdom[1][16], "label_hash_9e179e22c8"),
    below = caml_call1(Virtual_dom_Vdom[1][16], "below_hash_9e179e22c8"),
    cst_checkbox = "checkbox",
    _a_ = [0, [0, 17960, 1]],
    cst_web_ui_toggle_src_bonsai_w =
      "\n/* web_ui/toggle/src/bonsai_web_ui_toggle.ml */\n\n*.container_hash_9e179e22c8 {\n position:relative\n}\n\n*.label_hash_9e179e22c8 {\n cursor:pointer\n}\n\n*.span_hash_9e179e22c8 {\n opacity:50%;\n font-size:1.2em\n}\n\n*.text_hash_9e179e22c8 {\n padding:0.5em 1em 0.5em 1em;\n visibility:hidden;\n border-radius:3px;\n position:absolute;\n z-index:1;\n cursor:text;\n width:fit-content;\n min-width:200px\n}\n\n*.right_hash_9e179e22c8 {\n left:100%;\n top:-0.5em;\n transform:translateX(0.5em)\n}\n\n*.left_hash_9e179e22c8 {\n right:100%;\n top:-0.5em;\n transform:translateX(-0.5em)\n}\n\n*.above_hash_9e179e22c8 {\n bottom:100%;\n left:50%;\n transform:translateX(-50%)\n}\n\n*.below_hash_9e179e22c8 {\n top:100%;\n left:50%;\n transform:translateX(-50%)\n}\n\n*.container_hash_9e179e22c8:hover *.text_hash_9e179e22c8 {\n visibility:visible\n}\n\n*.container_hash_9e179e22c8:hover *.span_hash_9e179e22c8 {\n opacity:70%\n}\n\n*.checkbox_hash_9e179e22c8:checked~*.text_hash_9e179e22c8 {\n visibility:visible\n}\n\n*.checkbox_hash_9e179e22c8:checked~*.span_hash_9e179e22c8 {\n opacity:100%\n}\n\n*.checkbox_hash_9e179e22c8 {\n position:absolute;\n opacity:0%;\n cursor:pointer\n}";
   function view(colors, toggle, inner, direction){
    var
     direction_class =
       774323965 <= direction
        ? 847852583 <= direction ? left : above
        : -57574468 <= direction ? right : below,
     _c_ = caml_call1(Css_gen[52], colors[2]),
     _d_ = caml_call1(Css_gen[51], colors[4]),
     _e_ = caml_call2(Css_gen[30], _d_, _c_),
     _f_ = caml_call4(Css_gen[85], _a_, [0, colors[3]], 334701579, 0),
     _g_ = caml_call2(Css_gen[30], _f_, _e_),
     _h_ =
       [0,
        [0,
         text,
         [0,
          caml_call1(Virtual_dom_Vdom[1][32], _g_),
          [0, direction_class, 0]]]],
     _i_ = [0, caml_call3(Virtual_dom_Node[17], 0, _h_, [0, inner, 0]), 0],
     _j_ =
       [0,
        caml_call3(Virtual_dom_Node[42], 0, [0, [0, span, 0]], [0, toggle, 0]),
        _i_],
     _k_ = [0, checkbox, [0, caml_call1(Virtual_dom_Vdom[1][42], -1), 0]],
     _l_ = [0, [0, caml_call1(Virtual_dom_Vdom[1][43], cst_checkbox), _k_]],
     _m_ = [0, caml_call3(Virtual_dom_Node[30], 0, _l_, 0), _j_],
     _b_ = caml_call1(Css_gen[51], colors[1]),
     _n_ = [0, [0, label, [0, caml_call1(Virtual_dom_Vdom[1][32], _b_), 0]]],
     _o_ = [0, caml_call3(Virtual_dom_Node[37], 0, _n_, _m_), 0];
    return caml_call3(Virtual_dom_Node[17], 0, [0, [0, container, 0]], _o_);
   }
   caml_call1(Inline_css[1][1], cst_web_ui_toggle_src_bonsai_w);
   var Bonsai_web_ui_toggle = [0, [0], view];
   runtime.caml_register_global
    (25, Bonsai_web_ui_toggle, "Bonsai_web_ui_toggle");
   return;
  }
  (globalThis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJib25zYWlfd2ViX3VpX3RvZ2dsZS5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOlsic3BhbiIsImxlZnQiLCJjb250YWluZXIiLCJhYm92ZSIsImNoZWNrYm94IiwicmlnaHQiLCJ0ZXh0IiwibGFiZWwiLCJiZWxvdyIsInZpZXciLCJjb2xvcnMiLCJ0b2dnbGUiLCJpbm5lciIsImRpcmVjdGlvbiIsImRpcmVjdGlvbl9jbGFzcyJdLCJzb3VyY2VzIjpbIi9ob21lL2xpYW0tY2FycGVudGVyLy5vcGFtL3BlcnNvbmFsLXNpdGUvbGliL2JvbnNhaS93ZWJfdWlfdG9nZ2xlL2JvbnNhaV93ZWJfdWlfdG9nZ2xlLm1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Rzs7Ozs7Rzs7Ozs7Rzs7Ozs7Rzs7Ozs7Ozs7Ozs7SUF1QkFBO0lBQUFDO0lBQUFDOztJQUFBQztJQUFBQztJQUFBQztJQUFBQztJQUFBQztJQUFBQzs7Ozs7WUEwRUlDLEtBQUtDLFFBQVFDLFFBQVFDLE9BQU9DO0lBQzlCO0tBQUlDO29CQUQwQkQ7dUJBQUFBLFlBMUVoQ1osT0FBQUU7dUJBMEVnQ1UsWUExRWhDUixRQUFBRztLQUxXLE1BQUEsd0JBK0VGRTtLQWhGRSxNQUFBLHdCQWdGRkE7S0FoRkUsTUFBQTtLQURILE1BQUEsaUNBaUZDQTtLQWpGRCxNQUFBO0tBK0ZrQjs7O1NBeEYxQko7O1VBUFE7Y0FrRkZRO2VBYUksNkNBZGVGOzs7UUFhZiw0Q0F2RlZaLGVBMEVpQlc7O2VBMUVqQlAsY0FzRm1FO0tBQXZDLGNBQUU7S0FBdEIsVUFBRTtLQWxHa0IsTUFBQSx3QkFzRm5CTTtLQVdNLGNBckZmSCxXQVo0QjtLQWdHeEIsVUFBRTtJQUFGLE9BQUEsNENBcEZKTDtHQTBGSzs7dUNBaEJETzs7OztFIiwic291cmNlc0NvbnRlbnQiOlsib3BlbiEgQ29yZVxub3BlbiBWaXJ0dWFsX2RvbS5WZG9tXG5cbm1vZHVsZSBDb2xvcnMgPSBzdHJ1Y3RcbiAgdHlwZSB0ID1cbiAgICB7IHRvZ2dsZV90ZXh0IDogQ3NzX2dlbi5Db2xvci50XG4gICAgOyBpbm5lcl9iYWNrZ3JvdW5kIDogQ3NzX2dlbi5Db2xvci50XG4gICAgOyBpbm5lcl9ib3JkZXIgOiBDc3NfZ2VuLkNvbG9yLnRcbiAgICA7IGlubmVyX3RleHQgOiBDc3NfZ2VuLkNvbG9yLnRcbiAgICB9XG5cbiAgbGV0IHRvZ2dsZSB0ID0gQXR0ci5zdHlsZSAoQ3NzX2dlbi5jb2xvciB0LnRvZ2dsZV90ZXh0KVxuXG4gIGxldCBpbm5lciB0ID1cbiAgICBBdHRyLnN0eWxlXG4gICAgICBDc3NfZ2VuLihcbiAgICAgICAgYm9yZGVyIH53aWR0aDooYFB4IDEpIH5jb2xvcjp0LmlubmVyX2JvcmRlciB+c3R5bGU6YFNvbGlkICgpXG4gICAgICAgIEA+IGNvbG9yIHQuaW5uZXJfdGV4dFxuICAgICAgICBAPiBiYWNrZ3JvdW5kX2NvbG9yIHQuaW5uZXJfYmFja2dyb3VuZClcbiAgOztcbmVuZFxuXG5tb2R1bGUgQ3NzID1cblslY3NzXG5zdHlsZXNoZWV0XG4gIHt8XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLmxhYmVsIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuc3BhbiB7XG4gICAgICBvcGFjaXR5OiA1MCU7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cblxuICAgIC50ZXh0IHtcbiAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbSAwLjVlbSAxZW07XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgY3Vyc29yOiB0ZXh0O1xuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgbWluLXdpZHRoOiAyMDBweDtcbiAgICB9XG5cbiAgICAucmlnaHQge1xuICAgICAgbGVmdDogMTAwJTtcbiAgICAgIHRvcDogLTAuNWVtO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuNWVtKTtcbiAgICB9XG5cbiAgICAubGVmdCB7XG4gICAgICByaWdodDogMTAwJTtcbiAgICAgIHRvcDogLTAuNWVtO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0wLjVlbSk7XG4gICAgfVxuXG4gICAgLmFib3ZlIHtcbiAgICAgIGJvdHRvbTogMTAwJTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB9XG5cbiAgICAuYmVsb3cge1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIH1cblxuICAgIC5jb250YWluZXI6aG92ZXIgLnRleHQge1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG5cbiAgICAuY29udGFpbmVyOmhvdmVyIC5zcGFuIHtcbiAgICAgIG9wYWNpdHk6IDcwJTtcbiAgICB9XG5cbiAgICAuY2hlY2tib3g6Y2hlY2tlZCB+IC50ZXh0IHtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxuXG4gICAgLmNoZWNrYm94OmNoZWNrZWQgfiAuc3BhbiB7XG4gICAgICBvcGFjaXR5OiAxMDAlO1xuICAgIH1cblxuICAgIC5jaGVja2JveCB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBvcGFjaXR5OiAwJTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgfH1dXG5cbmxldCB2aWV3IGNvbG9ycyB+dG9nZ2xlIH5pbm5lciB+ZGlyZWN0aW9uID1cbiAgbGV0IGRpcmVjdGlvbl9jbGFzcyA9XG4gICAgbWF0Y2ggZGlyZWN0aW9uIHdpdGhcbiAgICB8IGBBYm92ZSAtPiBDc3MuYWJvdmVcbiAgICB8IGBCZWxvdyAtPiBDc3MuYmVsb3dcbiAgICB8IGBMZWZ0IC0+IENzcy5sZWZ0XG4gICAgfCBgUmlnaHQgLT4gQ3NzLnJpZ2h0XG4gIGluXG4gIE5vZGUuZGl2XG4gICAgfmF0dHJzOlsgQ3NzLmNvbnRhaW5lciBdXG4gICAgWyBOb2RlLmxhYmVsXG4gICAgICAgIH5hdHRyczpbIENzcy5sYWJlbDsgQ29sb3JzLnRvZ2dsZSBjb2xvcnMgXVxuICAgICAgICBbIE5vZGUuaW5wdXQgfmF0dHJzOlsgQXR0ci50eXBlXyBcImNoZWNrYm94XCI7IENzcy5jaGVja2JveDsgQXR0ci50YWJpbmRleCAoLTEpIF0gKClcbiAgICAgICAgOyBOb2RlLnNwYW4gfmF0dHJzOlsgQ3NzLnNwYW4gXSBbIHRvZ2dsZSBdXG4gICAgICAgIDsgTm9kZS5kaXYgfmF0dHJzOlsgQ3NzLnRleHQ7IENvbG9ycy5pbm5lciBjb2xvcnM7IGRpcmVjdGlvbl9jbGFzcyBdIFsgaW5uZXIgXVxuICAgICAgICBdXG4gICAgXVxuOztcbiJdfQ==
