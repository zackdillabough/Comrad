#!/bin/bash

yarn
pushd ios
pod install # install pod dependencies
popd
echo "done!"
