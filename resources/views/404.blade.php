@extends('layouts.app')

@section('content')
  @if (!have_posts())
    <main class="site-main --error404">
      <header class="page-header wrapper">
        <h1 class="page-header__heading">
          {!! App::title() !!}
        </h1>

        <p>{{ __('Sorry, but the page you were trying to view does not exist.', 'zkd') }}</p>
      </header>      
    </main>
  @endif
@endsection