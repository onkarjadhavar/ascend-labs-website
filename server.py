import http.server
import socketserver
import os
import sys

PORT = 3000

class CleanURLHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Prevent caching issues during active development
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def do_GET(self):
        path_parts = self.path.split('?')
        clean_path = path_parts[0].split('#')[0].lstrip('/')
        query = ('?' + path_parts[1]) if len(path_parts) > 1 else ''

        if clean_path and not os.path.splitext(clean_path)[1]:
            html_file = clean_path + '.html'
            if os.path.exists(html_file):
                self.path = '/' + html_file + query
        return super().do_GET()

if __name__ == '__main__':
    # Allow port reuse immediately
    socketserver.TCPServer.allow_reuse_address = True
    try:
        with socketserver.TCPServer(("", PORT), CleanURLHandler) as httpd:
            print(f"Serving Ascend Labs with Clean URLs at http://localhost:{PORT}", flush=True)
            httpd.serve_forever()
    except Exception as e:
        print(f"Server error: {e}", file=sys.stderr, flush=True)
