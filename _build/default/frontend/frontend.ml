open! Core
open! Bonsai_web
open! Bonsai.Let_syntax
module Form = Bonsai_web_ui_form.With_automatic_view

let header =
  let style =
    let open Css_gen in
    text_align `Center
    @> background_color (`Name "beige")
    @> font_weight `Lighter
    @> padding ~bottom:(`Px 3) ()
  in
  let open Vdom.Node in
  div
    ~attrs:[ Vdom.Attr.style style ]
    [ h1 [ text "Hi! I'm Liam Carpenter" ]; p [ text "Programmer, Fencer, Meanderer" ] ]
  |> Bonsai.const
;;

(* let component = *)
(*   let open Vdom.Node in *)
(*   div *)
(*     [ h3 [ text "Norwegian Pancakes" ] *)
(*     ; ul *)
(*         [ li [ text "3 eggs" ] *)
(*         ; li [ text "2 cups of milk" ] *)
(*         ; li [ text "1 cup of flour" ] *)
(*         ; li [ input ~attrs:[ Vdom.Attr.placeholder "Enter New Item Here" ] () ] *)
(*         ] *)
(*     ] *)
(*   |> Bonsai.const *)
(* ;; *)

let () = Start.start ~bind_to_element_with_id:"app" header
