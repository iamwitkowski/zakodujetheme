@php
  $widgets = zkd('widgets')->getSidebarIds();

@endphp
<div class="sidebar">
  @if (!empty($widgets))
    @foreach ($widgets as $key => $widget)
      <div class="sidebar__widget --widget-{!! $key !!}">
        @php dynamic_sidebar($widget) @endphp
      </div>
    @endforeach
@endif
</div>
