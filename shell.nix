{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
  packages = with pkgs; [
    git
    btop
    lazygit
    micro
  ];
}
