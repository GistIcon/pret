// setup the URL
$url = 'https://gisticon.github.io/pret/i';

$data = array(
    'username' => array(
    	urlencode("xrumer"),
    	urlencode("newspammer")
    ),
    'email' => urlencode("xrumertest@this.baddomain.com"),
    'ip' => "185.61.149.193",
    "badtorexit"
);

$data = http_build_query($data);

// init the request, set some info, send it and finally close it
$ch = curl_init($url);

curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$result = curl_exec($ch);

curl_close($ch);

return $result;
