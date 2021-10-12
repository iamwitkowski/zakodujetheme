@php
/**
 * Template: Archive
 *
 * @author
 */

@endphp

@extends('layouts.app')

@section('content')
  @include('components.page-header')
  @include('components.featured-post')
  <main class="site-main --archive">
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
