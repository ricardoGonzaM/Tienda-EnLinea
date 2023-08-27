<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductController extends Controller
{

    public function index()
    {
        $product = Product::all();
        return $product;
    }

    public function store(Request $request)
    {
        $product = new Product();
        $product->imagen = $request->imagen;
        $product->nombre = $request->nombre;
        $product->precio = $request->precio;
        $product->categoria = $request->categoria;
        $product->descripcion = $request->descripcion;

        $product->save();
    }

    public function show(string $id)
    {
        $product = Product::find($id);
        return $product;
    }

    public function update(Request $request, string $id)
    {
        $product = Product::findOrFail($request->id);
        $product->imagen = $request->imagen;
        $product->nombre = $request->nombre;
        $product->precio = $request->precio;
        $product->categoria = $request->categoria;
        $product->descripcion = $request->descripcion;

        $product->save();
        return $product;
    }

    public function destroy(string $id)
    {
        $product = Product::destroy($id);
        return $product;
    }
}