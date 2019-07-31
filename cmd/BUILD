load("@io_bazel_rules_go//go:def.bzl", "go_binary", "go_library")

go_library(
    name = "go_default_library",
    srcs = ["main.go"],
    deps = [
    ],
    importpath = "github.com/r351574nc3/infra-take-home/cmd",
    visibility = ["//visibility:private"],
)

go_binary(
    name = "take-home",
    embed = [":go_default_library"],
    deps = [
    ],
    visibility = ["//visibility:public"],
)