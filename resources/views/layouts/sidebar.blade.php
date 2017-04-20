<aside class="main-sidebar">
    <section class="sidebar">
        @if (auth()->user())
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="{{ url('/img/user7-128x128.jpg') }}" class="img-circle" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p>{{ auth()->user()->name }}</p>
                    <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                </div>
            </div>
        @endif
        <ul class="sidebar-menu">
            <li class="header">
                <span>Sales Information System</span>
            </li>
            @if (auth()->guest())
                <li><a href="#"><i class="fa fa-book"></i> <span>Welcome</span></a></li>
                <li><a href="#"><i class="fa fa-book"></i> <span>How It Works</span></a></li>
                <li><a href="#"><i class="fa fa-book"></i> <span>Help</span></a></li>
            @else
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-dashboard"></i> <span>Dashboard</span>
                    </a>
                </li>
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-home"></i> <span>Inventory</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="/inventory"><i class="fa fa-circle-o"></i> Horizontal</a></li>
                    </ul>
                </li>
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-user" aria-hidden="true"></i> <span>Reports</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="#"><i class="fa fa-circle-o"></i> Agent Sale Status Report</a></li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> Executive Report</a></li>
                    </ul>
                </li>
                <li class="header">
                    <span>Maintenance</span>
                </li>
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-file-text" aria-hidden="true"></i><span> Multimedia</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="#"><i class="fa fa-circle-o"></i> Pictures</a>
                        </li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> Videos</a></li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> Audio</a>
                        </li>
                    </ul>
                </li>
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-file-text" aria-hidden="true"></i><span> Data</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="/data/upload"><i class="fa fa-circle-o"></i> Import</a></li>
                        <li><a href="/data/export"><i class="fa fa-circle-o"></i> Export</a></li>
                        </li>
                    </ul>
                </li>
                <li class="header">
                    <span>Settings</span>
                </li>
                <li>
                    <a href="{{ url('/logout') }}" onclick="event.preventDefault();
                document.getElementById('logout-form').submit();"><i class="fa fa-cog"></i> <span>Logout</span></a>
                    <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
                        {{ csrf_field() }}
                    </form>
                </li>
            @endif
        </ul>
    </section>
</aside>
<div class="control-sidebar-bg"></div>
