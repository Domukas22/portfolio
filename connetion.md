###### if you log in and the 192.168.178.29:3000 doesn't work remotely anymore, go to windows powershell (as administrator) and run:

- 1. netsh interface portproxy delete v4tov4 listenaddress=192.168.178.29 listenport=3000
- 2. netsh interface portproxy add v4tov4 listenport=3000 listenaddress=192.168.178.29 connectport=3000 connectaddress=172.26.233.68

- Sometimes, port proxy mappings can fail after a reboot. Remove and recreate the proxy mapping

---

# make sure "npm run dev" runs:

- "next dev -H 0.0.0.0"

# configure firewall:

- (run on powershell:) netsh advfirewall firewall add rule name="Allow 3000" dir=in action=allow protocol=TCP localport=3000

# local ip is:

- 192.168.178.29

# wsl ip is:

- 172.26.233.68 (check by running "ip a" on wsl)

# configure proxy

- (run on powershell:) netsh interface portproxy show all
- make sure the result is:
  ----> 192.168.178.29 3000 172.26.233.68 3000
