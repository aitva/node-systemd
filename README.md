# Node Systemd

This is an example project to run a Node application using Systemd.
The goals of this project is to have:

- a running web server
- a systemd config
- a process that linger after user's logout

## Instructions

To lauch a Node application using Systemd:

1. create a systemd folder: `mkdir ~/.config/systemd/user`
2. copy the service file: `cp systemd/user/node-systemd.service ~/.config/systemd/user`
3. lauch the service: `systemctl --user start node-systemd`
4. look at the service's log: `journalctl --user-unit node-systemd`

If everything went well you know have a running Node application! But, when you logout of the server
the process will stop. To allow an user to lauch long running process: `sudo loginctl enable-linger USER`.

To ensure that your application is started with the server, you need to run: `systemctl --user enable node-systemd`.
