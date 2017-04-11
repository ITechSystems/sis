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
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="/"><i class="fa fa-circle-o"></i>Class Dashboard</a></li>
                    </ul>
                </li>
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-folder"></i> <span>Admission</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="#"><i class="fa fa-circle-o"></i> Application</a></li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> Entrance Examination</a></li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> Pre-Enrollment </a>
                        </li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> Enrollment </a></li>
                    </ul>
                </li>
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-user" aria-hidden="true"></i> <span>Students</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="#"><i class="fa fa-circle-o"></i> Existing </a></li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> Student MasterList</a></li>
                    </ul>
                </li>
                <li class="header">
                    <span>Maintenance</span>
                </li>
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-file-text" aria-hidden="true"></i><span> Exams</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="#"><i class="fa fa-circle-o"></i> Entrance Exams</a>
                        </li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> Quizes</a></li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> Periodical Exams</a>
                        </li>
                    </ul>
                </li>
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-dollar" aria-hidden="true"></i><span> OR Management</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="#"><i class="fa fa-circle-o"></i> Particulars</a></li>
                    </ul>
                </li>
                <li class="treeview">
                    <a href="#">
                        <i class="fa fa-university" aria-hidden="true"></i><span> Class Management</span>
                        <span class="pull-right-container">
                            <i class="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="#"><i class="fa fa-circle-o"></i> School Year</a></li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> Level</a></li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> Section</a></li>
                        <li><a href="#"><i class="fa fa-circle-o"></i> Class</a></li>
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
