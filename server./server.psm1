<VirtualHost 192.168.0.1:443>

    DocumentRoot /var/www/html2

    ServerName www.GistIcon.io

        SSLEngine on

        SSLCertificateFile /path/to/GistIcon.io.crt

        SSLCertificateKeyFile /path/to/your_private.key

        SSLCertificateChainFile /path/to/DigiCertCA.crt

    </VirtualHost>