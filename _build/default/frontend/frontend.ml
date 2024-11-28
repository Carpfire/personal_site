open! Bonsai_web


let component =
  let open Vdom.Node in
                 div
                   [ h3 [ text "Norwegian Pancakes" ]
                   ; ul
                       [ li [ text "3 eggs" ]
                       ; li [ text "2 cups of milk" ]
                       ; li [ text "1 cup of flour" ]
                       ]
                   ]|> Bonsai.const
(*   (\* Vdom.Node.text "hello world" *\) *)
(*   Vdom.Node.div *)
(*     ~attrs:[ Vdom.Attr.class_ "my-class" ] *)
(*     [ Vdom.Node.p [ Vdom.Node.text "hello world" ] *)
(*     ; Vdom.Node.span [ Vdom.Node.text "this is Bonsai" ] *)
(*     ] *)
(*   |> Bonsai.const *)
(* ;; *)

let () = Start.start  ~bind_to_element_with_id:"app" component


(* let () = print_endline "Hello World" *)
