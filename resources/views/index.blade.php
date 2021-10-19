@php
/**
 * Template: Archive
 *
 * @author
 */

@endphp

@extends('layouts.app')

@section('content')
  @include('components.blog-page-header')
  @include('components.featured-post')
  <main class="site-main --archive">
    @if (have_posts())
      <div class="wrapper">
        <div class="row">
          <div class="listing">
            @while(have_posts()) @php the_post() @endphp
            @include('components.post-tile')
            @endwhile
              <div class="pagination wrapper">
                {!! get_the_posts_navigation() !!}
              </div>
          </div>
          @else
            <div class="error-message">
              {{ __('Sorry, no results were found.', 'zkd') }}
            </div>
          @endif
          @include('components.sidebar')
        </div>
      </div>
  </main>
@endsection
