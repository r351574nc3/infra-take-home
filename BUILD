load("@bazel_gazelle//:def.bzl", "gazelle")

genrule(
    name = "app",
    srcs = [
        "//cmd:take-home",
    ],
    outs = [
        "app",
    ],
    cmd = "cp ./bazel-out/*/bin/cmd/*/take-home \"$@\"",
    executable = 1,
    local = 1,
)

gazelle(
    name = "gazelle",
    prefix = "github.com/r351574nc3/infra-take-home",
)