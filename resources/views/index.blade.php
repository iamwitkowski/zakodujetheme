@php
/**
 * Template: Archive
 *
 * @author
 */
@endphp

@extends('layouts.app')

@section('content')
  <main class="site-main --archive">
    @include('components.page-header')

    @if (have_posts())
      <div class="listing wrapper">
        @while(have_posts()) @php the_post() @endphp
          @include('components.post-tile')
        @endwhile
      </div>

      <div class="pagination wrapper">
        {!! get_the_posts_navigation() !!}
      </div>
    @else
      <div class="error-message">
        {{ __('Sorry, no results were found.', 'zkd') }}
      </div>
    @endif
  </main>
@endsection
