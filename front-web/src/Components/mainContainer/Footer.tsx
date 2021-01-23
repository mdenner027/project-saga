import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <nav>
                    <ul>
                        <li>
                            <a href="https://www.creative-tim.com" target="_new">
                                Creative Tim
                            </a>
                        </li>
                        <li>
                            <a href="http://presentation.creative-tim.com" target="_new">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="http://blog.creative-tim.com" target="_new">
                                Blog
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="copyright" id="copyright">
                    ©
                    <script>
                        document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))
                    </script>
                    <a href="https://www.invisionapp.com" target="_new">&nbsp; Invision</a>. Coded by &nbsp;
                    <a href="https://www.creative-tim.com" target="_new">Creative Tim</a>.
                </div>
            </div>
        </footer>
    );
}