load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "io_bazel_rules_go",
    urls = [
        "https://storage.googleapis.com/bazel-mirror/github.com/bazelbuild/rules_go/releases/download/0.19.1/rules_go-0.19.1.tar.gz",
        "https://github.com/bazelbuild/rules_go/releases/download/0.19.1/rules_go-0.19.1.tar.gz",
    ],
    sha256 = "8df59f11fb697743cbb3f26cfb8750395f30471e9eabde0d174c3aebc7a1cd39",
)

http_archive(
    name = "bazel_gazelle",
    urls = ["https://github.com/bazelbuild/bazel-gazelle/releases/download/0.18.1/bazel-gazelle-0.18.1.tar.gz"],
    sha256 = "be9296bfd64882e3c08e3283c58fcb461fa6dd3c171764fcc4cf322f60615a9b",
)

load("@io_bazel_rules_go//go:deps.bzl", "go_rules_dependencies", "go_register_toolchains")

go_rules_dependencies()

go_register_toolchains()

load("@bazel_gazelle//:deps.bzl", "go_repository", "gazelle_dependencies")

gazelle_dependencies()

go_repository(
    name = "com_github_gin_gonic_gin",
    commit = "caf3e350a548af1add9def68087ac53d1d000caa",
    importpath = "github.com/gin-gonic/gin",
)

go_repository(
    name = "com_github_gin_contrib_sse",
    commit = "22d885f9ecc78bf4ee5d72b937e4bbcdc58e8cae",
    importpath = "github.com/gin-contrib/sse",
)

go_repository(
    name = "com_github_mattn_go_isatty",
    commit = "6ca4dbf54d38eea1a992b3c722a76a5d1c4cb25c",
    importpath = "github.com/mattn/go-isatty",
)

go_repository(
    name = "com_github_go_yaml_yaml",
    commit = "5420a8b6744d3b0345ab293f6fcba19c978f1183",
    importpath = "github.com/go-yaml/yaml",
)

go_repository(
    name = "in_gopkg_yaml_v2",
    commit = "5420a8b6744d3b0345ab293f6fcba19c978f1183",
    importpath = "gopkg.in/yaml.v2",
)

go_repository(
    name = "com_github_ugorji_go",
    commit = "f3cacc17c85ecb7f1b6a9e373ee85d1480919868",
    importpath = "github.com/ugorji/go",
)

go_repository(
    name = "in_gopkg_go_playground_validator_v8",
    commit = "5f1438d3fca68893a817e4a66806cea46a9e4ebf",
    importpath = "gopkg.in/go-playground/validator.v8",
)

go_repository(
    name = "com_github_go_playground_validator",
    commit = "f28cb45dc0f0f406ba2015cdb59a5203ad220bc2",
    importpath = "github.com/go-playground/validator",
)

go_repository(
    name = "com_github_go_playground_universal_translator",
    commit = "71201497bace774495daed26a3874fd339e0b538",
    importpath = "github.com/go-playground/universal-translator",
)

go_repository(
    name = "com_github_go_playground_locales",
    commit = "f63010822830b6fe52288ee52d5a1151088ce039",
    importpath = "github.com/go-playground/locales",
)

go_repository(
    name = "com_github_golang_protobuf",
    commit = "5831880292e721c76b58a16ecc60adc27d8e6355",
    importpath = "github.com/golang/protobuf/proto",
)