open! Bonsai_web

let jusxtapose_digits ~(delimeter : string) (a : int Value.t) (b : int Value.t)
  : string Computation.t
  =
  let open Bonsai.Let_syntax in
  let%arr a = a
  and b = b in
  Int.to_string a ^ delimeter ^ Int.to_string b
;;

(*let%arr function sig I think
  arr : 'a Value.t -> f:('a -> 'b) -> 'b Computation.t*)

(* let%sub function sig ?
   sub : 'a Computation.t -> f:('a Value.t -> 'b ) -> 'b Value.t
*)

let _jusxtapose_and_sum (a : int Value.t) (b : int Value.t) =
  let open Bonsai.Let_syntax in
  let%sub jusxtaposed = jusxtapose_digits ~delimeter:"+" a b in
  let%sub sum =
    let%arr a = a
    and b = b in
    Int.to_string (a + b)
  in
  let%arr juxtaposed = jusxtaposed
  and sum = sum in
  juxtaposed ^ " = " ^ sum
;;

let (counter_button : Vdom.Node.t Computation.t) =
  let open Bonsai.Let_syntax in
  let%sub count, set_count = Bonsai.state (module Int) ~default_model:0 in
  ()
;;

let component =
  let open Vdom.Node in
  div
    [ h3 [ text "Norwegian Pancakes" ]
    ; ul
        [ li [ text "3 eggs" ]
        ; li [ text "2 cups of milk" ]
        ; li [ text "1 cup of flour" ]
        ; li [ input ~attrs:[ Vdom.Attr.placeholder "Enter New Item Here" ] () ]
        ]
    ]
  |> Bonsai.const
;;

let () = Start.start ~bind_to_element_with_id:"app" component
