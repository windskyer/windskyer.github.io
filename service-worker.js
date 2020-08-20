/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2013/09/10/linux-服务启动/index.html","bc45e8de0fcd34e8a7058b4e7cda4430"],["2013/09/19/mysql/index.html","c63023368a84348273c7a6082a8ae9d9"],["2015/06/17/cinder-api/index.html","c6abb84fd02908cec0eea7ecb24ba035"],["2015/06/17/cinder-reset-api接口封装流程/index.html","619ed96dcdfda88b00ce832b6743ec4b"],["2015/06/17/cinder-volume/index.html","900702c5fa4c28238a68a4c33ca370a7"],["2016/04/04/nova-liberty/index.html","49979a50b7319ace0c85616cabd39444"],["2016/04/19/Linux-namespace-资源隔离/1.jpg","c964c448b3a838d2f6b17ed81a944794"],["2016/04/19/Linux-namespace-资源隔离/index.html","c9b048fb93a433e5b36faf1c76079adb"],["2016/04/19/neutron-相关agent-服务分析/index.html","0c5d9f0a87f31f5f5dd9995026c7b7e4"],["2016/04/20/nova-创建虚拟机的调用流程/index.html","a77c396768fcf0ca409f5816ea7c40be"],["2016/04/21/rabbitmq/index.html","4fe0769325357bee4e5467c8b9a7716e"],["2016/04/27/ipset关于neutron用法/index.html","4a1a1e3940cb8c2eb8b3cf065df7fb96"],["2017/01/29/iptables屏蔽/index.html","fd4c94fabd2b43b51dd3cfadc85e7d67"],["2018/04/24/Iphoneikev2/img/1.jpg","149d19b35be6654fed8b3daf52c43ee6"],["2018/04/24/Iphoneikev2/img/2.jpg","24d022efe15b315d25817b366b6f8d07"],["2018/04/24/Iphoneikev2/index.html","c40dea9afef606ad5957d2c852bb820b"],["2018/04/24/ShadowsocksR/img/ShadowsocksR.png","a946f57a514a972dc57d53deafc80de6"],["2018/04/24/ShadowsocksR/img/ShadowsocksR1.png","674696bc4f4a2ef40c7b0cbf14c7e6eb"],["2018/04/24/ShadowsocksR/img/ShadowsocksR2.png","40c2dea101a6f27b7e2cecb905b224ac"],["2018/04/24/ShadowsocksR/index.html","71f5e3a0fb9e150b3cdb3ce0b661b896"],["2018/04/25/Shadowsocks/index.html","d0d3f1ebd35df09bdff3a07b7b12bbaa"],["2018/04/25/Shadowsocks/ss.png","66c52efc33f6ee7ca8fbb4d1f8337fd1"],["2019/01/01/hexo/index.html","bc3a935bb1a61461ef8a0be25249c792"],["2019/01/02/flanneld-backend/calico.png","746fb935325180110c341413e0ead7b5"],["2019/01/02/flanneld-backend/calid.png","40e4f98022d91c3cd4b0028e251663eb"],["2019/01/02/flanneld-backend/flannel.png","037e5480319cedd1e662c925bce23b3e"],["2019/01/02/flanneld-backend/index.html","5b29dc0e4f22165e384cecd706d34d59"],["2019/01/02/flanneld-backend/ksyun-vpc.jpg","dec4c177ea57215d78263680e5cce7e2"],["2019/01/02/flanneld-backend/route.png","2c1049b509ca05b366cee4bd607d9a07"],["2019/01/02/flanneld-backend/vpc_route.png","5df8cb7825948e000d012bb1def9df59"],["2019/01/08/leader选举源码分析/index.html","66b4c1276b45f07bdf4411e955e4d04b"],["2019/01/21/pod服务质量qos解析/index.html","a48181d1556686b7e45419552e32eeef"],["2019/02/28/algorithm/index.html","0a8f43b7544352ab3ecd7f2e3d0171df"],["2019/03/01/CNI网络架构解析/index.html","0a154111b2b03ff55dafab4aba39496c"],["2019/03/01/CNI网络架构解析/iptables.png","978af25ac299b0379a6736a3b9cd5e33"],["2019/03/01/k8s亲和性/index.html","992d1adc1b398126fbbeec80b122899a"],["2019/03/01/k8s调度权重/index.html","de0dd61ef19376443edfca93301938c4"],["2019/03/01/kube-scheduler-start/index.html","5a4d21d76e11fc30c8784316aae2ac87"],["2019/03/05/flannel优化方案/index.html","c574f5292662f8f5099a1b6d02933100"],["2019/03/05/flannel优化方案/ksyun-vpc.jpg","dec4c177ea57215d78263680e5cce7e2"],["2019/03/05/flannel优化方案/ksyun-vpc2.png","9515f9f25045fd979814e45867b62788"],["2019/03/06/AutoScaler源码梳理/index.html","b304ada436f582fec5d127c6f446d392"],["2019/03/06/AutoScaler设计文档/index.html","c8c7fb5654e4bf92325a28004d4b9d21"],["2019/03/06/AutoScaler设计文档/jg.png","d5e51cc14a90ffcf649feebaca8d1f40"],["2019/03/06/AutoScaler设计文档/sj.png","8fa0766962e0e28846d48e27be4d802d"],["2019/03/06/CSI解释/csi.png","02d20874b14b2d78d0fc5a622c59d225"],["2019/03/06/CSI解释/index.html","27d363cd2e6a8b70bb96afeca3406ed0"],["2019/03/06/CSI解释/jg.png","f6c6f6723131b9a06c0c41c3038e316a"],["2019/03/08/etcd升级/1.png","e14120f07f20fe455387c77d1a152b39"],["2019/03/08/etcd升级/2.png","882286dc3c7921818e0449193747a5e8"],["2019/03/08/etcd升级/index.html","9e41c8d3b21c3e8bcb4012a170e902f0"],["2019/03/12/大规模集群配置优化/index.html","675f9bfc779018b04f3a4f7a0e8e7fa0"],["2019/03/14/k8s联邦集群/1.png","892079b01f88c06098620f9ea17c83a7"],["2019/03/14/k8s联邦集群/2.png","28cc33f334fde5722d4416cb3ac07419"],["2019/03/14/k8s联邦集群/index.html","ad4fd925c5f131f9e26bc9665cd0c28e"],["2019/03/15/etcd-raft协议/1.png","f6d894b9d1a166fca948077e004ea77b"],["2019/03/15/etcd-raft协议/2.png","0d504d6e44abdb7d083e9e38f23c7128"],["2019/03/15/etcd-raft协议/3.png","cf956246ab49d6328efe45432d0eb6f5"],["2019/03/15/etcd-raft协议/4.png","7d0f80f3e0c4fa1660ea9333c8ff3c14"],["2019/03/15/etcd-raft协议/5.png","6b07c6799347602a44c7e114ca142b22"],["2019/03/15/etcd-raft协议/6.png","59e9a9f9ac1af7b16b32f489e4d0987a"],["2019/03/15/etcd-raft协议/7.png","6d3670bb75b49e61f7b11a11d6b33e57"],["2019/03/15/etcd-raft协议/index.html","96e5aba8a4128c8c4bf06a37094040d7"],["2019/03/18/Knative/eventing-concepts.png","8e123fa24060b845dff92f563bb625dc"],["2019/03/18/Knative/index.html","209a2d4c95a2d4a5da6cf22e6bf3c7b1"],["2019/03/18/Knative/knative-serving-object_model.png","07a3d760596958e60d04353e96989ce2"],["2019/03/19/API-Server简介/index.html","6cfc86ac6c882cec7a3a8cfc711c225a"],["2019/03/19/API-Server简介/kube-apiserver.png","786502cf5119f970014f0293ee3b7f7a"],["2019/03/19/pod限额/index.html","eba8479d4c05d7f2e4dff4975d91a7e8"],["2019/03/19/开放分布式系统追踪/1.jpg","d7f571b5f9d052a104afc10fd5089abe"],["2019/03/19/开放分布式系统追踪/2.png","692739b8c08b75a37ea11bd4e99fe92b"],["2019/03/19/开放分布式系统追踪/3.png","2eafb4006d79180fe65df6ad361648e5"],["2019/03/19/开放分布式系统追踪/index.html","71069c898752a686282a167ed31c0bc3"],["2019/03/20/docker架构/container.jpg","82e4cf04dac1b5faa8839c553f5abf34"],["2019/03/20/docker架构/docker-architecture.jpg","41cdc2bdeff20221c67563d673335a22"],["2019/03/20/docker架构/docker-daemon.jpg","ada09b4599d7fba5e93f5f06c9fc49c4"],["2019/03/20/docker架构/docker-server.jpg","b7ef1a7eb0e0b7aa93a9749f07977205"],["2019/03/20/docker架构/execdriver.jpg","0955bbf58b1ea973b17aca181b783fa3"],["2019/03/20/docker架构/graph-architecture.jpg","13f0019b41208d93b5eb410aa5697f76"],["2019/03/20/docker架构/graphdriver.jpg","baabb484a81bdfc8cff8d1b2d82d73b3"],["2019/03/20/docker架构/index.html","334ca64c435a994fa798f65e6454de87"],["2019/03/20/docker架构/libcontainer.jpg","11b23703e9ac5e07feca8f7e45227343"],["2019/03/20/docker架构/networkdriver.jpg","0c60de325753f7113e2ad7ffe382b8c4"],["2019/03/21/dockerfile/index.html","9c0e24c28a561513b772f986bf2067b1"],["2019/03/22/cAdvisor/index.html","ea1c9bda150c4aae957c62810411a545"],["2019/03/25/Controller-Manager/index.html","051dba43f17e379ba0ad192e6a363b33"],["2019/03/26/docker-install/index.html","20f68d38ea3a8ffff78892db155afe01"],["2019/03/27/Kube-Scheduler简介/index.html","eccd9b3efc800bbd010e4baf08537c2f"],["2019/03/27/docker-hub/1.png","e5507698ae61180cda6fea420f6f0d1f"],["2019/03/27/docker-hub/index.html","d5cdef3ee3a104a2ada80a7fd3dbc4f2"],["2019/03/28/go-micro/1.png","d68a6155b14c26d88f996114b9d9b76d"],["2019/03/28/go-micro/2.png","7e0d67cffca9d1e2e244fb1b10b2d3c5"],["2019/03/28/go-micro/3.png","2e3fa601e57aca29436074540865f08a"],["2019/03/28/go-micro/4.png","dbc99c355715deb1f30866316bb2aada"],["2019/03/28/go-micro/index.html","177ee0147ae6380c1fc38e551232f8d1"],["2019/03/29/nginx虚拟主机-域名重定向/index.html","f2d6ff70d2488c98ead44ae8f2af6ad3"],["2019/03/29/openssl/index.html","6d1dca4956dc5aeaf8e2ebd4571ba019"],["2019/04/01/k8s-ResourceQuota/index.html","e6eb7569a17849c52b82e2dbe9bd6184"],["2019/04/02/Linux-bridge/index.html","4435a7c85364b001ab186f20dee07e1b"],["2019/04/03/pod操作/index.html","64bbd85be3d3f57c6ec21f517a66f1ac"],["2019/04/08/pod介绍/index.html","ffb0dc7663fdf79324caf878829978c7"],["2019/04/09/pod生命周期/index.html","685ac906ff09c4facd3c9d2ae9f5c27a"],["2019/04/10/git杂项/index.html","2d46b87d0ab18a0d8097bf4b5055b7c6"],["2019/04/10/pod-eviction/index.html","80cc876904083df9b08159481cbdabc3"],["2019/04/11/pod定义/index.html","706fb4e373ef147bd713540104ae6d32"],["2019/04/12/pod检查/index.html","9ed83bad77a8a30bf272ac2a7a8f6ed7"],["2019/04/15/Linux进程切换后台和切换pid/index.html","373dd2547bf7484889667dcd81846491"],["2019/04/17/pod-volume/index.html","a88a7fb1ce87330382a1eb1229092ebb"],["2019/04/18/pod-configmap/index.html","b0f46b24a4506807f9f2e4cc89016069"],["2019/04/23/docker代理/index.html","b2bfe567ac3d483091002aafbf8e1b91"],["2019/04/25/pod调度/index.html","85725316d0cbe710a44c57f81072bcca"],["2019/05/06/kubelet/index.html","a6cc7c88f826dbbb96880059bdd7dc48"],["2019/05/10/debian9-8-docker-ce/index.html","759111a4022789f2a0e231731c0b97b3"],["2019/05/16/JetBrains-active/1.jpg","aeeb76422a11c8eac6b57ecd25add8a9"],["2019/05/16/JetBrains-active/index.html","91797e83c128dcfb6ebdff78dc808cbe"],["2019/06/06/etcdctl/index.html","15a0a5ca68b5b7cd5cdba7ace255c99e"],["2019/07/01/ip-netns/index.html","b993304a2e654973bd883bdcf23e2f64"],["2019/07/01/ip-netns/ns-bridge.png","64e900c6f29c461f421f834e28d4b177"],["2019/08/16/etcd资源类型/index.html","37c06b211e9fd7e74a6464951d50b232"],["2019/09/19/mysql记录/index.html","9b81e95dd8a37b058e946dc4df2e887c"],["2019/09/24/nginx-ldap/1.png","8fcedda4aa25a39e013650472d36a2ba"],["2019/09/24/nginx-ldap/index.html","ae84c358fa378763f949a77c54c284d3"],["2019/10/08/windows-激活/index.html","1c841fe00407e1f77c994ff09ae1afa2"],["2019/10/09/harbor-能力测试/1.png","d1ac51cb130ea08428653ee8cdc08a85"],["2019/10/09/harbor-能力测试/2.png","8756b281c30edfe5f631f5ce3d654079"],["2019/10/09/harbor-能力测试/index.html","c4455756cbc59ffeda1e041fe202ff69"],["2019/10/10/coredns/index.html","9f2fc49c151f9f9dca6b28b044ce53c7"],["2019/10/11/php-fpm优化/1.gif","de031333fade152256a9137bd2a58e61"],["2019/10/11/php-fpm优化/10.gif","d1a392dd4afe09e02853f0979a73fc9d"],["2019/10/11/php-fpm优化/2.gif","7c0ba3a9b7aeb98a1a0400733df7108e"],["2019/10/11/php-fpm优化/3.gif","ed589e333db2f36070274c404e5b4f0d"],["2019/10/11/php-fpm优化/4.gif","2849d3d426f1e10189ed471b6184d3f4"],["2019/10/11/php-fpm优化/5.gif","98a1decdd5b976c2be51f2b9ae5ed766"],["2019/10/11/php-fpm优化/6.jpg","8057f0500352d288d39e825c9a11eee9"],["2019/10/11/php-fpm优化/7.jpg","36888f7924973276b3fe44bf0a0a06f3"],["2019/10/11/php-fpm优化/8.jpg","9c562272b80febf6b9064b0e0506e11c"],["2019/10/11/php-fpm优化/9.jpg","1db2c5c3e773b2aab88ffc2233ebee10"],["2019/10/11/php-fpm优化/index.html","1fa2972633f2ef1a1ca593c84642ddc2"],["2019/10/28/nginx-geoip2-docker实现禁止某个地区或国家访问/index.html","20c5bc6753f82070400f450e2a78bb77"],["2019/11/01/k8s集群-iptables-vs-ipvs性能测试/1.png","394840d5a1e6cd384504347a2d1ea65b"],["2019/11/01/k8s集群-iptables-vs-ipvs性能测试/2.png","03f3b0f3c9a0b48b2ff8e98398a139f6"],["2019/11/01/k8s集群-iptables-vs-ipvs性能测试/21.png","d202cf406eb4636bc1439c366fe38088"],["2019/11/01/k8s集群-iptables-vs-ipvs性能测试/3.png","cc374a668cc2519f075d43b696b35d5f"],["2019/11/01/k8s集群-iptables-vs-ipvs性能测试/32.png","4026d18a543cfe4d277ac3d2358c796a"],["2019/11/01/k8s集群-iptables-vs-ipvs性能测试/index.html","ed71af4129bcd1ef6755f6d864e976d6"],["2019/11/06/k8s容器固定ip/index.html","3e760268738829cac37a7553238a8516"],["2019/12/13/Kubernetes-实战-Operator-Finalizers-实现/index.html","98e6f8a4d9e9e22bc4bda4ba29f65d1b"],["2019/12/16/pod访问svc不通问题/index.html","bb26689e5482482bb6594682db456a0b"],["2019/12/26/vim使用方式/index.html","cb73b6046a35bfde937205de2a897e57"],["2019/12/26/vim使用方式/l.png","af5f214407710d90ede939c77e4b1a47"],["2019/12/26/vim使用方式/m.png","320971c964c6ae76403db5f34874a3f1"],["2019/12/27/etcd性能/index.html","bd58873f79096b43f80b58684012909f"],["2020/01/07/kubemark测试k8s集群/index.html","14519abb6ee2ddac8ed46df154081cbc"],["2020/02/02/coredns解析集群node节点/index.html","270f01979a2658c4bc6b6c20b53b39ec"],["2020/02/18/hexo博客同时部署到github和VPS上/index.html","db3e7b6cc77ea9b0667d4dc1664d8842"],["2020/02/26/golang依赖管理/index.html","602526983d596cbc24f8f019bbad9b9e"],["2020/03/01/kubefed环境搭建/index.html","103e3e53610c275a236442f386032c8e"],["2020/03/08/多集群资源统一管理之Federation-v2/KubeFedv2-arch.png","981e5804c686b8d63519ab8e12651402"],["2020/03/08/多集群资源统一管理之Federation-v2/index.html","7abfa4a02058308ef96ba3fbf7052b9b"],["2020/03/08/多集群资源统一管理之Federation-v2/rsp.png","fca0361c249ebaff7268ed64e5e21806"],["2020/03/08/多集群资源统一管理之Federation-v2/service-dns.png","09bef6f374497a9cce16e92522dbef84"],["2020/03/08/多集群资源统一管理之Federation-v2/sync-controller-1024x603.png","da1412f23cfcb4857f24b2d01ba1e3d8"],["2020/03/10/集群日志审计/image2019-10-8_17-31-8.png","8f27983634e84c1c249fd80fbb3d6647"],["2020/03/10/集群日志审计/image2019-10-8_17-40-17.png","0c4ee14bea5e51beb5ef58a01064e2bb"],["2020/03/10/集群日志审计/image2019-10-8_17-49-21.png","33c4fac11aa78065f9f1f8955f4dbed1"],["2020/03/10/集群日志审计/index.html","a45b98f19eac70a6d8af2af775ffb7ad"],["2020/03/10/集群日志审计/审计.jpg","8daa95f1eb715d6b446afe04c426ebd3"],["2020/03/11/python-图片文字识别-二维码识别/index.html","c919014437cb57d11fc178a394304c06"],["2020/04/01/docker看veth对/index.html","2a3e99678cc06ef1737c0bae81c88bfb"],["2020/04/03/理解Go-Context机制/index.html","85052897429375d1746862cd33920054"],["2020/04/15/centos7安装kernel-4-x/CentOS-7-1-Running-Oracle-VM-VirtualBox_001.jpg","245cd8a52ea593ec66acf9a0be3bde77"],["2020/04/15/centos7安装kernel-4-x/CentOS-7-1-Running-Oracle-VM-VirtualBox_002.jpg","32348e0623a6dea75f9f450dfa2d7da7"],["2020/04/15/centos7安装kernel-4-x/index.html","58a9a2b30cfead5b5492b7d80b83995f"],["2020/04/18/Golang-sync-Mutex用法（互斥量用法）/index.html","74eced6672c4ec96cda7ea450b0da893"],["2020/04/20/k8s节点下线/index.html","924a0df228a995a5b7762aca031ec683"],["2020/04/26/nginx日志时间输出/index.html","954d6ef89ecf9efd916b0f5aac30114f"],["about/index.html","9f4f0fb843edd3a185d3cda06ded1f2f"],["about/index/wx.jpg","6c5e9dfc0e0fd000b1b1f25adce61d75"],["archives/2013/09/index.html","fabad4674519dd086e8d9149e0c1c3fd"],["archives/2013/index.html","547c89e7610b61d929831eefd101e6a1"],["archives/2015/06/index.html","6013580725b2ffcaba5ced713991b484"],["archives/2015/index.html","4be411a03232e7c61d1456d43e556fd8"],["archives/2016/04/index.html","6ed7d4d7b806151f136bdb6623f9fc0f"],["archives/2016/index.html","b27bbf72bae2e5a8f8d04d3ba99c23f4"],["archives/2017/01/index.html","52497bb6c695402e88c0a05000fc2365"],["archives/2017/index.html","ee44df00b8bace23fee6e62909813245"],["archives/2019/01/index.html","bd3b519fc4dcf651fba9804d58c5e95e"],["archives/2019/02/index.html","09fb21dbf0b828a2c5754f3b64bb15e5"],["archives/2019/03/index.html","cd6d20aa2c7f797d851878204d2cfedb"],["archives/2019/03/page/2/index.html","cbd76d66959593e520b4565343f10191"],["archives/2019/03/page/3/index.html","73b9ce7a397dc62782b8daa032464163"],["archives/2019/04/index.html","f5eee33db485fd93db23087876bca45b"],["archives/2019/04/page/2/index.html","0f5827f19ad0ea0da60c9c290cf78fe7"],["archives/2019/05/index.html","bcd828aa41c6ae02ba8edb7689eb6831"],["archives/2019/06/index.html","0b086bcd9027edb63d65ba1a337d3a4d"],["archives/2019/07/index.html","5bc0c7d4c097c02de87808bb6fc27817"],["archives/2019/08/index.html","601607df05ce200d56103d115e15f5e0"],["archives/2019/09/index.html","6050e1182b3aa3711c1e4f4fe2614c9a"],["archives/2019/10/index.html","5599139aa5e3caf6a0997984c06330e4"],["archives/2019/11/index.html","f2517870aab9b17b516a8be3565fe9e6"],["archives/2019/12/index.html","14a4922385a5d3068766fae361a86187"],["archives/2019/index.html","deb42551dd059b58949924ea8e9a522a"],["archives/2019/page/2/index.html","c9be257c17b0f4999b9ff31888fe9ba2"],["archives/2019/page/3/index.html","30bd45a423bca9d67344bc96724b9c0b"],["archives/2019/page/4/index.html","651cd68c6c944e2985a3a91de8c47e2c"],["archives/2019/page/5/index.html","67b55bdf73f15517de28fbb9cfd89bf7"],["archives/2019/page/6/index.html","25e277c00c9c5cd3db1057fb7b69cc16"],["archives/2019/page/7/index.html","ab5688b7c26e833558a67b6fe6450ecc"],["archives/2020/01/index.html","4f9e385d0a57b26759d5317ec5d027b5"],["archives/2020/02/index.html","ae0fd3ee1f52f25c5e97cd8cf43fdabf"],["archives/2020/03/index.html","f2667335efad9ebff66dfb8c61f36550"],["archives/2020/04/index.html","3696c979ffd7590ceb2afd88bce0c802"],["archives/2020/index.html","4c79710caf9f6719b0e8dca1de1ec406"],["archives/2020/page/2/index.html","436844bf4ab862f891ab4e9ec387bdbe"],["archives/index.html","3824746e2f31241b7980f02b162ee8c3"],["archives/page/2/index.html","2db9c41ecde0c75db4adf1defa5df3c7"],["archives/page/3/index.html","c6fab4d194f6bdc111621d4bd841f5a5"],["archives/page/4/index.html","ca8c0cb1e44e6af11d1a85ff007bec1e"],["archives/page/5/index.html","b00e496344061728344058ae565c174c"],["archives/page/6/index.html","5d5eea250387e9899d17e284ff48fa02"],["archives/page/7/index.html","9efd655fa0e27ee0402673eff5683597"],["archives/page/8/index.html","cfd02855fe966099f3a1e8ffe0b8d47b"],["archives/page/9/index.html","0447fec0725ba8e1e40763c38b31def0"],["categories/Idea/index.html","3370a7d1c9bdb62b9e5b8d8d2bcd7c25"],["categories/Kubernetes/index.html","5ae36ec8515738abd01ce355d384959d"],["categories/Kubernetes/page/2/index.html","49df2ca3e43037660103c8c864c4eeef"],["categories/Kubernetes/page/3/index.html","4a1af962794299419281da594635d830"],["categories/Kubernetes/page/4/index.html","0c2cf9c003c3a91b50fba6a18fca3319"],["categories/Kubernetes/page/5/index.html","d0600583c5a9ba09d33dd51d7f30f463"],["categories/Kubernetes/page/6/index.html","1c0d027bab8680bd908ccb1fab348733"],["categories/Kubernetes/page/7/index.html","96c91f5e4b12d6db68aa8b312b96d2c5"],["categories/Linux/index.html","6da951a1f4fdedea7d16b616e5b7d631"],["categories/Openstack/index.html","b55d0f794bb71472ac5fd54475351a11"],["categories/Python/index.html","6230f2b041627457a879eaf8ebc087b7"],["categories/db/index.html","a22e840c57bf87891805691247073bf4"],["categories/hexo/index.html","ec50c6134a4940d97723630a8cd42dd0"],["categories/index.html","9d89e1ac3b268b5030cce6a6f95be275"],["css/main.css","dc0c5239839c181dadd0648b801f985f"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","1b5a9935d82cbc3a6d4715c36da88180"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/wechatpay.jpg","f717baa24ca8c91958f84d28b2b54903"],["index.html","a508cfe222dc847822721bd84a5216eb"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5626093e184694b3861569542ca618e2"],["lib/font-awesome/css/font-awesome.css","c56891e73d94228fccab2bb436420880"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/source/lib/canvas-nest/README.html","a3068631c9280326383fb58b8e63cfde"],["lib/source/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["lib/source/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["page/2/index.html","73e6aaf40fd89511d3e519f8724fd7ac"],["page/3/index.html","b2e4af8cb07a83a24c336adfb0ce6d3a"],["page/4/index.html","a7d300d8d849d2a4bc01701984893464"],["page/5/index.html","4c2ba152e0857b436ec06973d864bb1f"],["page/6/index.html","68a149e94b2e63346b255d4b55cf5feb"],["page/7/index.html","a7a2b838d6490b50dc67f8935df85b0e"],["page/8/index.html","85bb287e3cfd441d81c418b7d4e964fb"],["page/9/index.html","2c5cc731f881f2a43b4492ddcea48fd2"],["tags/Go/index.html","81449030c7e5f96a27a5a603a2b101f4"],["tags/JetBrains/index.html","b902264c771678f9d21e1814c531ec4a"],["tags/ResourceQuota/index.html","c39a75c74a5b1f1ef06cb456082695a6"],["tags/adsense/index.html","d726dfc3eaafe75aeb443f473d4ac361"],["tags/bash/index.html","f867913b693edbf89398d4859d4a5bf2"],["tags/bridge/index.html","81461d7c267d791774b0e0b64a5dd4dd"],["tags/cAdvisor/index.html","d0a186f09f1c6a2f5524a2e7d5c4a75b"],["tags/cinder/index.html","137ca42c4ab48be05cf0907c8ecad8d1"],["tags/configmap/index.html","3ede4679256a2c74709ccbd54cfb613f"],["tags/dns/index.html","f810bd0579ad01a71bc5505fe8e60596"],["tags/docker/index.html","74986b89c61d9af07c1d421ef5835027"],["tags/etcd/index.html","34d906fc4860a815ba96044e299535b5"],["tags/federation/index.html","94eb650771dc24460928309dd2cd8d6f"],["tags/flannel/index.html","203a759e82585fdda79fec1567d977da"],["tags/git/index.html","c7733baca571319fd3065517371c63e0"],["tags/go-micro/index.html","c8e28005b607ebaf2eaca9bd023d9d66"],["tags/go/index.html","ec41a38dd80ce905af8a999d26be6b0f"],["tags/hub/index.html","f9ce3040ce2a123a838010c60ade02f4"],["tags/index.html","9a959c64cbfbab8e58253d1a6c972a9e"],["tags/k8s/index.html","3a3f7fafe0e0e7d5ca5b8ccaa23da516"],["tags/kubelet/index.html","8f6752822b9b4dfaa0c302244a779e7b"],["tags/linux/index.html","ace51871b0d7b568f8ca4e6a6816f3f3"],["tags/mysql/index.html","f3a284fa24bdb31b1cea4163f33cb0c3"],["tags/netns/index.html","94bfef669cb46ab43f8d5babea6499b7"],["tags/network/index.html","c8eee58553c676322e47944e281a6b16"],["tags/neutron/index.html","0ab9d0c01ae17b534baaa8dbee5fe6a0"],["tags/next/index.html","83c56571ccfd5f16b226a4b9f0137dbe"],["tags/nginx/index.html","afe7f2e25838bfa1017cecdfe52665b7"],["tags/node/index.html","b2909693ee517c731736e3b98639f3eb"],["tags/op/index.html","b6b203903236a4b1b8312283b87e7641"],["tags/openssl/index.html","1a692eacb26bc0a5b6e66bb9638d546e"],["tags/php/index.html","9e83f75c0e1731a5a50e86d572493d73"],["tags/pid/index.html","4bd05411e32feb2c197d3467df3d463b"],["tags/pod/index.html","c9187ef48ab7b3384e9e08e9285912bd"],["tags/python/index.html","c1d161c30f79da4d7041bf1f52743bf5"],["tags/rabbitmq/index.html","66ba62b7877f548cc059e3bd1a256d9a"],["tags/scheduler/index.html","a3ec3170db7fe01564bc5b8cda33a93b"],["tags/serverless/index.html","92368866b3d6071652f876b24093dcb2"],["tags/vim/index.html","670e143016edb232a2f4c4f2572629f4"],["tags/volume/index.html","ae7b30df26457811cdb1c39312294d77"],["tags/windows/index.html","b5dc927510aec050d295daefcf9b296e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







