{{--
  Template Name: Frontpage
--}}

@extends('layouts.app')

@section('content')
  <main class="site-main --page --custom">
   @include('components.frontpage.hero')
      @php the_content() @endphp
  </main>
@endsection
