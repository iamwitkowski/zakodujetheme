@extends('layouts.app')

@section('content')
  <main class="site-main --single">
    @while(have_posts()) @php the_post() @endphp
      @include('components.single-header')
    <div class="wrapper">
      <div class="row">
        @include('partials.content')
        @include('components.sidebar')
      </div>
		<div class="wrapper">
					<?php comments_template(); ?>
			
		</div>

    </div>
    @endwhile
ź  </main>
@endsection
