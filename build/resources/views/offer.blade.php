{{--
  Template Name: Oferta
--}}

@extends('layouts.app')

@section('content')
  @include('components.offer.offer-header')
  <main class="site-main --offer">
    <div class="wrapper">
        <div class="row">
          @include('partials.content')
        </div>
      </div>
  </main>
@endsection
