---
sidebar_position: 2
---

# 广寒宫(Palace)配置

```protocol
message Bootstrap {
  pkg.conf.Server server = 1;
  pkg.conf.HTTPServer http = 2;
  pkg.conf.GRPCServer grpc = 3;
  pkg.conf.JWT jwt = 4;
  pkg.conf.Cache cache = 6;
  pkg.conf.Tracer tracer = 7;
  pkg.conf.Discovery discovery = 8;
  pkg.conf.Oss oss = 9;
  Watch watch = 10;
  OAuth2 oauth2 = 11;
  pkg.conf.EmailConfig email_config = 12;
  // 主库, 用于维护系统配置、用户等
  pkg.conf.Database database = 13;
  // 业务数据库，多租户场景下的业务数据， 业务数据采用分表存储
  pkg.conf.Database bizDatabase = 14;
  // 告警历史存储位置
  pkg.conf.Database alarmDatabase = 15;
  // 环境标识
  string env = 16;
  // 是否依赖HouYi服务
  bool dependHouYi = 17;
  // 是否依赖Rabbit服务
  bool dependRabbit = 18;
  // metrics配置
  string metricsToken = 19;
  // log配置
  pkg.conf.Log log = 20;
}

// 微服务配置
message MicroServer {
  // 月兔消息服务
  pkg.conf.MicroServer rabbit_server = 1;
  // 后羿代理服务
  pkg.conf.MicroServer hou_yi_server = 2;
  // 后羿服务多实例配置（此配置优先级高于单实例配置）
  repeated pkg.conf.MicroServer hou_yi_servers = 3;
}

message Watch {
  message Strategy {
    // 超时时间
    google.protobuf.Duration timeout = 1;
    // 执行频率 cron 表达式
    string interval = 2;
  }
  message AlertEvent {
    // 超时时间
    google.protobuf.Duration timeout = 1;
    // 执行频率
    google.protobuf.Duration interval = 2;
  }
  Strategy strategy = 1;
  AlertEvent alertEvent = 2;
}

message OAuth2 {
  message Config {
    string client_id = 1;
    string client_secret = 2;
    string callback_uri = 3;
    repeated string scopes = 5;
  }
  string redirect_uri = 1;
  Config github = 2;
  Config gitee = 3;
}
```