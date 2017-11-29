function FindProxyForURL(url, host)
{
    if (isInNet(host, "192.168.1.0", "255.255.255.0", "10.0.0.0"))
        return "DIRECT";
        
	return "PROXY 10.0.0.50:32802; DIRECT";
}