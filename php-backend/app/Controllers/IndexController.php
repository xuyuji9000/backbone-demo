<?php
namespace App\Controllers;

class IndexController extends HomeController {
    public function home($request, $response, $args) {
        $response->getBody()->write('This is Home!');
        return $response;
    }

    public function users($request, $response, $args) {
        $data = [
            [ 
                'id' => 1,
                'name' => 'Bob'
            ],
            [
                'id' => 2,
                'name' => 'Karl'
            ]
        ];
        return $response->withJson($data);
    }
}
