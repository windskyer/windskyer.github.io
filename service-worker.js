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

var precacheConfig = [["2013/09/10/linux-服务启动/index.html","f72c86d63dfd3c0245c8cad5375317cc"],["2013/09/19/mysql/index.html","1f95e36be47512354d27ee31985316cf"],["2015/06/17/cinder-api/index.html","d17df1a5161bbfbc6060ad60f151cf3b"],["2015/06/17/cinder-reset-api接口封装流程/index.html","65fa3f4f1762ee579b622e8c20f43739"],["2015/06/17/cinder-volume/index.html","ea04ac6494395822a3a2856188a1e64e"],["2016/04/04/nova-liberty/index.html","0c60dba14e46c319a9a5d02cd9cf8792"],["2016/04/19/Linux-namespace-资源隔离/1.jpg","c964c448b3a838d2f6b17ed81a944794"],["2016/04/19/Linux-namespace-资源隔离/index.html","63e3c0a3e555dabe80d7594918a4128f"],["2016/04/19/neutron-相关agent-服务分析/index.html","774b409f0e79754c805629fc03f4ff36"],["2016/04/20/nova-创建虚拟机的调用流程/index.html","b57c63cbcf546ceccd088fe98fbfe414"],["2016/04/21/rabbitmq/index.html","d29586517a1ab7bf0383e80e703f6bb7"],["2016/04/27/ipset关于neutron用法/index.html","b2e98c0447d965a47d10a0698cfdbf06"],["2017/01/29/iptables屏蔽/index.html","4984a647bebbd5dfba27733cfea9f0aa"],["2018/04/24/Iphoneikev2/img/1.jpg","149d19b35be6654fed8b3daf52c43ee6"],["2018/04/24/Iphoneikev2/img/2.jpg","24d022efe15b315d25817b366b6f8d07"],["2018/04/24/Iphoneikev2/index.html","6a036a1df901a8dcc2b74e8aaf59b928"],["2018/04/24/ShadowsocksR/img/ShadowsocksR.png","a946f57a514a972dc57d53deafc80de6"],["2018/04/24/ShadowsocksR/img/ShadowsocksR1.png","674696bc4f4a2ef40c7b0cbf14c7e6eb"],["2018/04/24/ShadowsocksR/img/ShadowsocksR2.png","40c2dea101a6f27b7e2cecb905b224ac"],["2018/04/24/ShadowsocksR/index.html","937c398c12e23d6744bdf426e47a5235"],["2018/04/25/Shadowsocks/index.html","b794a3b16902eeacdc10abd741c52a06"],["2018/04/25/Shadowsocks/ss.png","66c52efc33f6ee7ca8fbb4d1f8337fd1"],["2019/01/01/hexo/index.html","ad22d4099323e8927eaa5b834f872f2c"],["2019/01/02/flanneld-backend/calico.png","746fb935325180110c341413e0ead7b5"],["2019/01/02/flanneld-backend/calid.png","40e4f98022d91c3cd4b0028e251663eb"],["2019/01/02/flanneld-backend/flannel.png","037e5480319cedd1e662c925bce23b3e"],["2019/01/02/flanneld-backend/index.html","d32fce1b9c3107f3cfa6e04bbaff9949"],["2019/01/02/flanneld-backend/ksyun-vpc.jpg","dec4c177ea57215d78263680e5cce7e2"],["2019/01/02/flanneld-backend/route.png","2c1049b509ca05b366cee4bd607d9a07"],["2019/01/02/flanneld-backend/vpc_route.png","5df8cb7825948e000d012bb1def9df59"],["2019/01/08/leader选举源码分析/index.html","52d4eefc4b26e9f1267bc7cfba1a7d10"],["2019/01/21/pod服务质量qos解析/index.html","9a54962edb1cc895b70ba72af5103012"],["2019/02/28/algorithm/index.html","68a57fe17e8315e2b233e24cd50e7b84"],["2019/03/01/CNI网络架构解析/index.html","d7b1112e2ce3c209f66568af39d88e83"],["2019/03/01/CNI网络架构解析/iptables.png","978af25ac299b0379a6736a3b9cd5e33"],["2019/03/01/k8s亲和性/index.html","45673b0cc9549547cf7503bb24b1a6d2"],["2019/03/01/k8s调度权重/index.html","8f46443d79baa83e5a2ffd012d9243d4"],["2019/03/01/kube-scheduler-start/index.html","dc89285b2c3147ae687e289eb40457e8"],["2019/03/05/flannel优化方案/index.html","af6fa989e51d1eae68ae09ae51a58330"],["2019/03/05/flannel优化方案/ksyun-vpc.jpg","dec4c177ea57215d78263680e5cce7e2"],["2019/03/05/flannel优化方案/ksyun-vpc2.png","9515f9f25045fd979814e45867b62788"],["2019/03/06/AutoScaler源码梳理/index.html","db7a271c89dc3f7950901fd33caef731"],["2019/03/06/AutoScaler设计文档/index.html","f4c29816c0d7593c7094b4a9bb4da6d9"],["2019/03/06/AutoScaler设计文档/jg.png","d5e51cc14a90ffcf649feebaca8d1f40"],["2019/03/06/AutoScaler设计文档/sj.png","8fa0766962e0e28846d48e27be4d802d"],["2019/03/06/CSI解释/csi.png","02d20874b14b2d78d0fc5a622c59d225"],["2019/03/06/CSI解释/index.html","f67dd1db1b2fb04540c137c5e89133a4"],["2019/03/06/CSI解释/jg.png","f6c6f6723131b9a06c0c41c3038e316a"],["2019/03/08/etcd升级/1.png","e14120f07f20fe455387c77d1a152b39"],["2019/03/08/etcd升级/2.png","882286dc3c7921818e0449193747a5e8"],["2019/03/08/etcd升级/index.html","0361c0f987bbcf0984b0a387953c015c"],["2019/03/12/大规模集群配置优化/index.html","e7efc4fb989fa45ecc9e3b68f9e642da"],["2019/03/14/k8s联邦集群/1.png","892079b01f88c06098620f9ea17c83a7"],["2019/03/14/k8s联邦集群/2.png","28cc33f334fde5722d4416cb3ac07419"],["2019/03/14/k8s联邦集群/index.html","08ad5f5a4d0f60222cfa96a811445ff1"],["2019/03/15/etcd-raft协议/1.png","f6d894b9d1a166fca948077e004ea77b"],["2019/03/15/etcd-raft协议/2.png","0d504d6e44abdb7d083e9e38f23c7128"],["2019/03/15/etcd-raft协议/3.png","cf956246ab49d6328efe45432d0eb6f5"],["2019/03/15/etcd-raft协议/4.png","7d0f80f3e0c4fa1660ea9333c8ff3c14"],["2019/03/15/etcd-raft协议/5.png","6b07c6799347602a44c7e114ca142b22"],["2019/03/15/etcd-raft协议/6.png","59e9a9f9ac1af7b16b32f489e4d0987a"],["2019/03/15/etcd-raft协议/7.png","6d3670bb75b49e61f7b11a11d6b33e57"],["2019/03/15/etcd-raft协议/index.html","2cdc669d1dcb31072121d17ec24e692b"],["2019/03/18/Knative/eventing-concepts.png","8e123fa24060b845dff92f563bb625dc"],["2019/03/18/Knative/index.html","e59c1395ce641491b78f4ac730422f56"],["2019/03/18/Knative/knative-serving-object_model.png","07a3d760596958e60d04353e96989ce2"],["2019/03/19/API-Server简介/index.html","897c36ff5f3713b01b1857dad475a062"],["2019/03/19/API-Server简介/kube-apiserver.png","786502cf5119f970014f0293ee3b7f7a"],["2019/03/19/pod限额/index.html","986c08abc4f7ba7e396505fd7ba5f7e8"],["2019/03/19/开放分布式系统追踪/1.jpg","d7f571b5f9d052a104afc10fd5089abe"],["2019/03/19/开放分布式系统追踪/2.png","692739b8c08b75a37ea11bd4e99fe92b"],["2019/03/19/开放分布式系统追踪/3.png","2eafb4006d79180fe65df6ad361648e5"],["2019/03/19/开放分布式系统追踪/index.html","2a3db42e6e660526bed9971c50a5fd61"],["2019/03/20/docker架构/container.jpg","82e4cf04dac1b5faa8839c553f5abf34"],["2019/03/20/docker架构/docker-architecture.jpg","41cdc2bdeff20221c67563d673335a22"],["2019/03/20/docker架构/docker-daemon.jpg","ada09b4599d7fba5e93f5f06c9fc49c4"],["2019/03/20/docker架构/docker-server.jpg","b7ef1a7eb0e0b7aa93a9749f07977205"],["2019/03/20/docker架构/execdriver.jpg","0955bbf58b1ea973b17aca181b783fa3"],["2019/03/20/docker架构/graph-architecture.jpg","13f0019b41208d93b5eb410aa5697f76"],["2019/03/20/docker架构/graphdriver.jpg","baabb484a81bdfc8cff8d1b2d82d73b3"],["2019/03/20/docker架构/index.html","245ec8e7fea8eefbdc0962aa4ac584c6"],["2019/03/20/docker架构/libcontainer.jpg","11b23703e9ac5e07feca8f7e45227343"],["2019/03/20/docker架构/networkdriver.jpg","0c60de325753f7113e2ad7ffe382b8c4"],["2019/03/21/dockerfile/index.html","96ba1e6566711da48743dbc9643a173e"],["2019/03/22/cAdvisor/index.html","472f00849dd3bd038b98a9ec284859ff"],["2019/03/25/Controller-Manager/index.html","b914b55e49c8c751716958fd5853b09d"],["2019/03/26/docker-install/index.html","f2325035b42e9e188c7229d6a55c7585"],["2019/03/27/Kube-Scheduler简介/index.html","c40f9a55b6cf815084089fe697152ae1"],["2019/03/27/docker-hub/1.png","e5507698ae61180cda6fea420f6f0d1f"],["2019/03/27/docker-hub/index.html","c855f200d9dd836358b0a7e6f65bcbff"],["2019/03/28/go-micro/1.png","d68a6155b14c26d88f996114b9d9b76d"],["2019/03/28/go-micro/2.png","7e0d67cffca9d1e2e244fb1b10b2d3c5"],["2019/03/28/go-micro/3.png","2e3fa601e57aca29436074540865f08a"],["2019/03/28/go-micro/4.png","dbc99c355715deb1f30866316bb2aada"],["2019/03/28/go-micro/index.html","5b8d16f837f7dbd83cf826ca5f87ec9f"],["2019/03/29/nginx虚拟主机-域名重定向/index.html","f826b56bc780009c032a830aa0a4d867"],["2019/03/29/openssl/index.html","38ae05458c33cb9e2bb544ee99bd3603"],["2019/04/01/k8s-ResourceQuota/index.html","7dd9e161ec700ef86f5301bdf5a6308c"],["2019/04/02/Linux-bridge/index.html","b51cd0794876eacfa93090d527990430"],["2019/04/03/pod操作/index.html","8feb01ddda59ce735895dc88e9ddfe30"],["2019/04/08/pod介绍/index.html","29b68b3043ba9be70d69448524e57914"],["2019/04/09/pod生命周期/index.html","647a6c42a189681d494fc30dcfc8f665"],["2019/04/10/git杂项/index.html","6f18091e4cfd5574db7b9f4a5ada5b90"],["2019/04/10/pod-eviction/index.html","7d348371c92e4cfb3801e825821b05ea"],["2019/04/11/pod定义/index.html","6ac67919ff29bf0e7242df51b9eac5a7"],["2019/04/12/pod检查/index.html","443c84d60f2f26a29bbf272aceffeb89"],["2019/04/15/Linux进程切换后台和切换pid/index.html","08855660f9578b9d09e154b8502f90c0"],["2019/04/17/pod-volume/index.html","7b3e0359eaaef56ad9ade04220e69738"],["2019/04/18/pod-configmap/index.html","9e81367ec0876a0a4e14e2d60b3dbfeb"],["2019/04/23/docker代理/index.html","169db37d920f11dad5533dc1d847223b"],["2019/04/25/pod调度/index.html","0063ec4f03f8ec445797fc609a7e2191"],["2019/05/06/kubelet/index.html","794221e26db000f27edc8918e5e13fbf"],["2019/05/10/debian9-8-docker-ce/index.html","16415580ff81194128a2cbc4fa6d8507"],["2019/05/16/JetBrains-active/1.jpg","aeeb76422a11c8eac6b57ecd25add8a9"],["2019/05/16/JetBrains-active/index.html","5d31ba6fd269c25247d3fd825dbf1fb9"],["2019/06/06/etcdctl/index.html","5a67694094398abf7ce4357f54efba18"],["2019/07/01/ip-netns/index.html","b14c552da89cadc758312f5456e5f2a0"],["2019/07/01/ip-netns/ns-bridge.png","64e900c6f29c461f421f834e28d4b177"],["2019/08/16/etcd资源类型/index.html","9f44dcc9844677dcda4933ee2f50a756"],["2019/09/19/mysql记录/index.html","4ebc212712de1ebe1a4b062912cdba64"],["2019/09/24/nginx-ldap/1.png","8fcedda4aa25a39e013650472d36a2ba"],["2019/09/24/nginx-ldap/index.html","57c934e29b823544045ed6a96b02a764"],["2019/10/08/windows-激活/index.html","c20697ffcd28ec5956994fc11d8f8f32"],["2019/10/09/harbor-能力测试/1.png","d1ac51cb130ea08428653ee8cdc08a85"],["2019/10/09/harbor-能力测试/2.png","8756b281c30edfe5f631f5ce3d654079"],["2019/10/09/harbor-能力测试/index.html","fed8f4ec565a1f952e7304c24a81301a"],["2019/10/10/coredns/index.html","d3bedba1eac2f60c2b1e9acda92abfd6"],["2019/10/11/php-fpm优化/1.gif","de031333fade152256a9137bd2a58e61"],["2019/10/11/php-fpm优化/10.gif","d1a392dd4afe09e02853f0979a73fc9d"],["2019/10/11/php-fpm优化/2.gif","7c0ba3a9b7aeb98a1a0400733df7108e"],["2019/10/11/php-fpm优化/3.gif","ed589e333db2f36070274c404e5b4f0d"],["2019/10/11/php-fpm优化/4.gif","2849d3d426f1e10189ed471b6184d3f4"],["2019/10/11/php-fpm优化/5.gif","98a1decdd5b976c2be51f2b9ae5ed766"],["2019/10/11/php-fpm优化/6.jpg","8057f0500352d288d39e825c9a11eee9"],["2019/10/11/php-fpm优化/7.jpg","36888f7924973276b3fe44bf0a0a06f3"],["2019/10/11/php-fpm优化/8.jpg","9c562272b80febf6b9064b0e0506e11c"],["2019/10/11/php-fpm优化/9.jpg","1db2c5c3e773b2aab88ffc2233ebee10"],["2019/10/11/php-fpm优化/index.html","25c67f15d842b8401d63bee5c6ede384"],["2019/10/28/nginx-geoip2-docker实现禁止某个地区或国家访问/index.html","17f8e493ae157b47b5bcf6973dc874b2"],["2019/11/01/k8s集群-iptables-vs-ipvs性能测试/1.png","394840d5a1e6cd384504347a2d1ea65b"],["2019/11/01/k8s集群-iptables-vs-ipvs性能测试/2.png","03f3b0f3c9a0b48b2ff8e98398a139f6"],["2019/11/01/k8s集群-iptables-vs-ipvs性能测试/21.png","d202cf406eb4636bc1439c366fe38088"],["2019/11/01/k8s集群-iptables-vs-ipvs性能测试/3.png","cc374a668cc2519f075d43b696b35d5f"],["2019/11/01/k8s集群-iptables-vs-ipvs性能测试/32.png","4026d18a543cfe4d277ac3d2358c796a"],["2019/11/01/k8s集群-iptables-vs-ipvs性能测试/index.html","f0820d8e9170ef83cbf07645b75a5e92"],["2019/11/06/k8s容器固定ip/index.html","94bfe60eb9bd0df7492efb6105eef2ad"],["2019/12/13/Kubernetes-实战-Operator-Finalizers-实现/index.html","436816088ffaea14b2d02a1bd2a270db"],["2019/12/16/pod访问svc不通问题/index.html","be3a63044b9de2e94e6a8ef9863c6a14"],["2019/12/26/vim使用方式/index.html","bb35d000ab2c9930782268cae33269db"],["2019/12/26/vim使用方式/l.png","af5f214407710d90ede939c77e4b1a47"],["2019/12/26/vim使用方式/m.png","320971c964c6ae76403db5f34874a3f1"],["2019/12/27/etcd性能/index.html","29ccfb1d7f67f3ce9be2b5e59de79b9d"],["2020/01/07/kubemark测试k8s集群/index.html","6493deb25e4a02bab230ad43d7b2187a"],["2020/02/02/coredns解析集群node节点/index.html","bd4becee99d2d96707d33eca99f99f6b"],["2020/02/18/hexo博客同时部署到github和VPS上/index.html","a662a68cf7d37bf77d61a83101352583"],["2020/02/26/golang依赖管理/index.html","80f8ed4464918f83579df4cd39d5e01d"],["2020/03/01/kubefed环境搭建/index.html","cefa0757ed45adaf14d5cd3072275439"],["2020/03/08/多集群资源统一管理之Federation-v2/KubeFedv2-arch.png","981e5804c686b8d63519ab8e12651402"],["2020/03/08/多集群资源统一管理之Federation-v2/index.html","0a4ac0da9be76eb3abc94ba603ad7aa3"],["2020/03/08/多集群资源统一管理之Federation-v2/rsp.png","fca0361c249ebaff7268ed64e5e21806"],["2020/03/08/多集群资源统一管理之Federation-v2/service-dns.png","09bef6f374497a9cce16e92522dbef84"],["2020/03/08/多集群资源统一管理之Federation-v2/sync-controller-1024x603.png","da1412f23cfcb4857f24b2d01ba1e3d8"],["2020/03/10/集群日志审计/image2019-10-8_17-31-8.png","8f27983634e84c1c249fd80fbb3d6647"],["2020/03/10/集群日志审计/image2019-10-8_17-40-17.png","0c4ee14bea5e51beb5ef58a01064e2bb"],["2020/03/10/集群日志审计/image2019-10-8_17-49-21.png","33c4fac11aa78065f9f1f8955f4dbed1"],["2020/03/10/集群日志审计/index.html","e979e34f9c3f077dd2aa1004350648c3"],["2020/03/10/集群日志审计/审计.jpg","8daa95f1eb715d6b446afe04c426ebd3"],["2020/03/11/python-图片文字识别-二维码识别/index.html","5fc7b1514588ae221aa1b09f2e971f9d"],["2020/04/01/docker看veth对/index.html","ec53932605f3decc22f51386ba6134ff"],["2020/04/03/理解Go-Context机制/index.html","e2c9af55e6dd1bb2556a9075a7421d1f"],["2020/04/15/centos7安装kernel-4-x/CentOS-7-1-Running-Oracle-VM-VirtualBox_001.jpg","245cd8a52ea593ec66acf9a0be3bde77"],["2020/04/15/centos7安装kernel-4-x/CentOS-7-1-Running-Oracle-VM-VirtualBox_002.jpg","32348e0623a6dea75f9f450dfa2d7da7"],["2020/04/15/centos7安装kernel-4-x/index.html","14c5c7da86b42675443e2f69cf0598b7"],["2020/04/18/Golang-sync-Mutex用法（互斥量用法）/index.html","839bb4d0bb424463746a81ce7862432e"],["about/index.html","7a049bfb6ffe57d929dc323b81eb3ca2"],["about/index/wx.jpg","6c5e9dfc0e0fd000b1b1f25adce61d75"],["archives/2013/09/index.html","1ddc5cb935241c5d48d9ce0dc60250ce"],["archives/2013/index.html","63e84d3a9c379cb2a99762b0b07f3be3"],["archives/2015/06/index.html","7b5c9ed31fec7c80b9a5dab73bd67c26"],["archives/2015/index.html","046a59bababc298219f0c934aa057f0e"],["archives/2016/04/index.html","fbc1150d517e31d603145344a3b8e3c1"],["archives/2016/index.html","9a036ba57f386dee19373d989bb2f284"],["archives/2017/01/index.html","6e935a00d1d3c17cd6d3921d6d4b0c82"],["archives/2017/index.html","603365924b6a0ec504c66ad5b5200de1"],["archives/2019/01/index.html","091235a4bcb92dd1062afe13206bb3a4"],["archives/2019/02/index.html","aae008065dff598ae720e5deb80f1b1d"],["archives/2019/03/index.html","1b7c979b25cb526f563331c25ca0457d"],["archives/2019/03/page/2/index.html","9c4154c60e2bc4a30fbe37765ee708b0"],["archives/2019/03/page/3/index.html","30840475e7027b21b367a9fb64b0f31a"],["archives/2019/04/index.html","0f702a9f07f2a305690503fa59700ba0"],["archives/2019/04/page/2/index.html","94ded3981392db9b11f3267205c993ec"],["archives/2019/05/index.html","63b69af643322ae9dfb821fde7cda223"],["archives/2019/06/index.html","c915436f307db82079898933b0455e8b"],["archives/2019/07/index.html","99e0c45325f739070d89fa9d7c2b2ade"],["archives/2019/08/index.html","c44b104f3d08c7f77b2b4868c5f96b66"],["archives/2019/09/index.html","fceb9d00ab8dffa4c9dd8b13c0f7f033"],["archives/2019/10/index.html","16d6bbe269e0e8b25be3f95da13fbf9b"],["archives/2019/11/index.html","82408aab5aa8abd5260335deb960646e"],["archives/2019/12/index.html","90c3faba9991bf5102aa826cf70f260b"],["archives/2019/index.html","6b3203097454a80a915b9ac8320d731f"],["archives/2019/page/2/index.html","9136c903a8e70381d9116c4bf0df9e0b"],["archives/2019/page/3/index.html","3ea963f6705a208b4e303f83d184a4b7"],["archives/2019/page/4/index.html","1770390cf22f2583d98f262ade0ef879"],["archives/2019/page/5/index.html","9ef8a87472e64a62cadbbafc04e7c692"],["archives/2019/page/6/index.html","27ab9925ccd677ecaa75d9870f28ac8c"],["archives/2019/page/7/index.html","a5dcfef43ec8df50aeeda525a4f60725"],["archives/2020/01/index.html","2ec3f4b100476854b4c57f80ea67ba63"],["archives/2020/02/index.html","fbda35576e166445e0134baca572dedc"],["archives/2020/03/index.html","2b993e622c15698ea3497cbdac35b65f"],["archives/2020/04/index.html","99d178e9a4438393a8b518ea94e81edd"],["archives/2020/index.html","47a51b4aee23bf8c3456722550f4ab6d"],["archives/2020/page/2/index.html","d429f9cffa68b56faff191064a894c83"],["archives/index.html","9f431e98cca64e32213d71e52b1893e5"],["archives/page/2/index.html","02b07d49d2fd92f07244a0a832ade8f0"],["archives/page/3/index.html","f37f71a2c486b8e04bf8d5c2f326a771"],["archives/page/4/index.html","7617912f1aaa6cb0883464bee10d4e4b"],["archives/page/5/index.html","371d0231faca120acffd98235fa99ddc"],["archives/page/6/index.html","81b3ba668dde90b94e7b5f674e2cd8fd"],["archives/page/7/index.html","572cce2a673d4f7b62d55f79f99579af"],["archives/page/8/index.html","9bd312ad3ae4ca8a97d853b0079dcfab"],["archives/page/9/index.html","2ed5a466b846eb8c979280cd387f431e"],["categories/Idea/index.html","63ba3b76a07b18a1ebb8cc2947bd365a"],["categories/Kubernetes/index.html","1e3e4b6319978587c88e68c40bcba7d7"],["categories/Kubernetes/page/2/index.html","29a1094253b9532a51e4d367eeae23e4"],["categories/Kubernetes/page/3/index.html","b1a40f5a9d93e345bf405bb32cad0886"],["categories/Kubernetes/page/4/index.html","8c0a59e0205dc4c78d777f692fbc1be9"],["categories/Kubernetes/page/5/index.html","fcdba229780b29279768c076ae8868fd"],["categories/Kubernetes/page/6/index.html","7dc0ea27c0f9502d5d2b65f99f6b2c73"],["categories/Kubernetes/page/7/index.html","9797c3c54bfbc25368879c5ad0816fc3"],["categories/Linux/index.html","bfc5e2d453486b0aba444e946c526626"],["categories/Openstack/index.html","f44c83d03e0194c1c2b77605e01aa18d"],["categories/Python/index.html","89617a25673401566fe64ef03e32dc9b"],["categories/db/index.html","3d5c0c904f9565f5aa8f8ea132c3b740"],["categories/hexo/index.html","457fc87e79d12e34e6e6b78777b77e1a"],["categories/index.html","5530fd67c6b3ad3069125882836017b1"],["css/main.css","d479b2769ff5effeb2d33f6b55fe8a4e"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","1b5a9935d82cbc3a6d4715c36da88180"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/wechatpay.jpg","f717baa24ca8c91958f84d28b2b54903"],["index.html","c384868a93efcc17c8950d5b1d6d7e15"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5626093e184694b3861569542ca618e2"],["lib/font-awesome/css/font-awesome.css","c56891e73d94228fccab2bb436420880"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/source/lib/canvas-nest/README.html","a3068631c9280326383fb58b8e63cfde"],["lib/source/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["lib/source/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["page/2/index.html","1cd9972f0d338c137c0d5d7f9fea118d"],["page/3/index.html","dd68f85ef73be8e9fb39b3b231b92211"],["page/4/index.html","30d7619ebdae9154b80b34ed87466e0c"],["page/5/index.html","12d8228de8c2ac324df438a2e2f973cf"],["page/6/index.html","c77fbef6b6c7a465d2abdb6fac2af119"],["page/7/index.html","da8e00aca6b770c2b55e9cc15640d860"],["page/8/index.html","250d4110de9fc6030d0df6f824fd1f06"],["page/9/index.html","6292062ac20a5a0e76cec4372821fe5a"],["tags/Go/index.html","d12bf6d6e1f78a1d70c56586fcbc12a3"],["tags/JetBrains/index.html","495642bce5d6a4e7890b736343981952"],["tags/ResourceQuota/index.html","ca3238f7a4e7da0a767efc7ae065c83b"],["tags/adsense/index.html","b34ccfbea14eb18d30d8c039b7d94cfc"],["tags/bash/index.html","60269d9f5c1f12496b32584a193574d3"],["tags/bridge/index.html","51201f5d51e0003ad3ef4ad0dcdbbb8c"],["tags/cAdvisor/index.html","fd8f8be756e5c069579e0231f348b482"],["tags/cinder/index.html","5ffedae480241606ad27ad46e3e1cbc5"],["tags/configmap/index.html","39aece439c34d50736358be6c40e5000"],["tags/dns/index.html","ebec9d9419acb2ef88603f2703b60793"],["tags/docker/index.html","51ba77c4ac45505c89664630dae2ad13"],["tags/etcd/index.html","405c6bf844bf6625ae69ebba0284864c"],["tags/federation/index.html","33bfc3a29c6df9c88a22050c5d548bf8"],["tags/flannel/index.html","24b1c6dd2d3ec95dd1ef167454180a91"],["tags/git/index.html","c71b7de3903aa45c22347e0c25d5f862"],["tags/go-micro/index.html","b8bf76a8d853c51b681c0420e7e7f4d0"],["tags/go/index.html","456dffdfe03b6540bfa2fa10fa6a4ba1"],["tags/hub/index.html","17439eb43cdbda14cfdf3e9b70a4c4c0"],["tags/index.html","d8ae660f003a66e7facb875b4580ebcc"],["tags/k8s/index.html","edecae797a20a6996f45a9a7f7be481b"],["tags/kubelet/index.html","18f1b23c3d512a75550125ba39f12f6f"],["tags/linux/index.html","166b5e0194fca6bd5865c75dcaa3eeb1"],["tags/mysql/index.html","54af4bca51e452e3d0873feff001f972"],["tags/netns/index.html","3ec8ee6e5a3188ec5afc92f5341a4c87"],["tags/network/index.html","b29d4c6a4ed83b4d2be90678a8297a0e"],["tags/neutron/index.html","40795faa8ad899bdf20ead3f13a8d18f"],["tags/next/index.html","8602f46d03cfb7abd0e85ecdc9744c5a"],["tags/nginx/index.html","863084352f5c262803496f0db7d7eecf"],["tags/node/index.html","8ed38202405ac127b1ab35a216045003"],["tags/op/index.html","9daedf18214e12034b89a5c7af7d75a8"],["tags/openssl/index.html","5736ce7758f89ef4ca7250998afba298"],["tags/php/index.html","26ab07ebc422f53d789fc5b2c5a87df0"],["tags/pid/index.html","9681775b2592515d73c12ba4c14694e8"],["tags/pod/index.html","7e09d35006576fb096a34125e5d15ab6"],["tags/python/index.html","1d150d82b73afa04cdafccd39184e94c"],["tags/rabbitmq/index.html","6a9ab6679109723360e9d24767de2e71"],["tags/scheduler/index.html","154018bfc4f559d11bee24ba1ff9c08f"],["tags/serverless/index.html","0cf4a615adb45dd0163e725fb8216e71"],["tags/vim/index.html","97d8f0dfa9d8cc0c8f84d6be3f7fc262"],["tags/volume/index.html","63b98516167f986a5bbde041944c92a7"],["tags/windows/index.html","7abe53e12b14f78d587635db67ea08a7"]];
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







