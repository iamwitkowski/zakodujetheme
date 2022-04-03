{{--
  Template Name: Page
--}}

@extends('layouts.app')

@section('content')
  @include('components.page-header')
  <main class="site-main --offer">
    <div class="wrapper">
        <div class="row">
          @include('partials.content')
          @include('components.offer.offer-sidebar')
        </div>
      </div>
  </main>
@endsection
