{{--
  Template Name: Frontpage
--}}

@extends('layouts.app')

@section('content')
  <main class="site-main --page --custom">
    @include('components.hero')
    @include('components.history')
    @include('components.slider')
    @include('components.products')
    @include('components.cooperation')
    @include('components.contact')
  </main>
@endsection
