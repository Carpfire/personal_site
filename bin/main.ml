(*   Dream.run ~port:8081 (fun _ -> *)
(*     Dream.respond *)
(*       "/home/liam-carpenter/personal_site/_build/default/frontend/frontend.bc.js") *)
(* ;; *)

let frontend =
  Dream.from_filesystem
    "/home/liam-carpenter/personal_site/_build/default/frontend/"
    "frontend.bc.js"
;;

(* let index = Dream.run ~port:8080 (fun _ -> Views.Index.get) *)

let () =
  Dream.run
  @@ Dream.logger
  @@ Dream.router
       [ Dream.get "/main" (fun _ -> Views.Index.get); Dream.get "/frontend" frontend ]
;;

(* print_endline "hello from js" *)
