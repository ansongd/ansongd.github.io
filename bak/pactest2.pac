function FindProxyForURL(url, host)
{
    if (isInNet(host, "192.168.1.0", "255.255.255.0", "10.0.0.0"))
        return "DIRECT";
        
	return "SOCKS 192.168.1.14:8889; PROXY 192.168.1.14:8888; DIRECT";
}