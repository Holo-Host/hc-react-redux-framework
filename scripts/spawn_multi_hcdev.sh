#!/bin/bash
# Holochain 3 identity scenario

pushd build >/dev/null

echo "Making sure priv.key have right permissions."
chmod 400 holo-identities/.identity1/priv.key
echo "*"
chmod 400 holo-identities/.identity2/priv.key
echo "*"
chmod 400 holo-identities/.identity3/priv.key
echo "DONE"
echo ""

echo "Spawning 3 instances of hcdev"
echo "To kill them type ./kill_all_hcdev.sh"
hcdev --execpath holo-identities/.identity3 --DHTport 4043 web 4143 &
hcdev --execpath holo-identities/.identity2 --DHTport 4042 web 4142 &
hcdev --execpath holo-identities/.identity1 --DHTport 4041 web 4141 &

popd >/dev/null