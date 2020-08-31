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

var precacheConfig = [["2013/09/10/linux-服务启动/index.html","6ba334e2ba16a992879a0ccc96666546"],["2013/09/19/mysql/index.html","ac8fe095679418aafa3a7f0f7346bedd"],["2015/06/17/cinder-api/index.html","9d7440ce54e93f3ef644f7415e2de839"],["2015/06/17/cinder-reset-api接口封装流程/index.html","bf0e8575b6e36fb11ebca9fc69cc63ba"],["2015/06/17/cinder-volume/index.html","08a1e7f608f3b59ebfefcfb7c341c608"],["2016/04/04/nova-liberty/index.html","8abc7542dbab14c3b4c9ab8e5c19a17b"],["2016/04/19/Linux-namespace-资源隔离/1.jpg","c964c448b3a838d2f6b17ed81a944794"],["2016/04/19/Linux-namespace-资源隔离/index.html","71541f2f43f553300af8b287eefe9aa0"],["2016/04/19/neutron-相关agent-服务分析/index.html","8a4112ff98e779d75fe2c67faca9598b"],["2016/04/20/nova-创建虚拟机的调用流程/index.html","1da03f7bb27b57e184db1d9e59517bce"],["2016/04/21/rabbitmq/index.html","97f183181c4785c0683d61a53138ef2c"],["2016/04/27/ipset关于neutron用法/index.html","dfd782defcbfec0f6ff9bbe2fe71636e"],["2017/01/29/iptables屏蔽/index.html","b0fcccba152890f200fa42315bf658b8"],["2018/04/24/Iphoneikev2/img/1.jpg","149d19b35be6654fed8b3daf52c43ee6"],["2018/04/24/Iphoneikev2/img/2.jpg","24d022efe15b315d25817b366b6f8d07"],["2018/04/24/Iphoneikev2/index.html","6e78dcfe39b66c35d5343e06e92ceec6"],["2018/04/24/ShadowsocksR/img/ShadowsocksR.png","a946f57a514a972dc57d53deafc80de6"],["2018/04/24/ShadowsocksR/img/ShadowsocksR1.png","674696bc4f4a2ef40c7b0cbf14c7e6eb"],["2018/04/24/ShadowsocksR/img/ShadowsocksR2.png","40c2dea101a6f27b7e2cecb905b224ac"],["2018/04/24/ShadowsocksR/index.html","63b80f6fed2abf50dc1e695b8bfaa084"],["2018/04/25/Shadowsocks/index.html","4bb228ad996d2b2dde4c718729fd3800"],["2018/04/25/Shadowsocks/ss.png","66c52efc33f6ee7ca8fbb4d1f8337fd1"],["2019/01/01/hexo/index.html","92ccd1847bed486a6deb7571f67d0189"],["2019/01/02/flanneld-backend/calico.png","746fb935325180110c341413e0ead7b5"],["2019/01/02/flanneld-backend/calid.png","40e4f98022d91c3cd4b0028e251663eb"],["2019/01/02/flanneld-backend/flannel.png","037e5480319cedd1e662c925bce23b3e"],["2019/01/02/flanneld-backend/index.html","7496f298e72d8438218ceca535bea577"],["2019/01/02/flanneld-backend/ksyun-vpc.jpg","dec4c177ea57215d78263680e5cce7e2"],["2019/01/02/flanneld-backend/route.png","2c1049b509ca05b366cee4bd607d9a07"],["2019/01/02/flanneld-backend/vpc_route.png","5df8cb7825948e000d012bb1def9df59"],["2019/01/08/leader选举源码分析/index.html","e58cd4fd23a2d1bdf669e9d2680ab4d9"],["2019/01/21/pod服务质量qos解析/index.html","c9445c2f9095c66520ac34d2118bb475"],["2019/02/28/algorithm/index.html","950166211e3b8b624a7bd7e6977faa34"],["2019/03/01/CNI网络架构解析/index.html","9141af7f635408d9e4265590c7a50b4e"],["2019/03/01/CNI网络架构解析/iptables.png","978af25ac299b0379a6736a3b9cd5e33"],["2019/03/01/k8s亲和性/index.html","21371de1a720d1c87eb1b26c576217f5"],["2019/03/01/k8s调度权重/index.html","045d91cc9743c4a4a1353ea2910fdb95"],["2019/03/01/kube-scheduler-start/index.html","cf8b425087a96f309be372c7e9bf0940"],["2019/03/05/flannel优化方案/index.html","c17993139890e4151e24dc9c7c607a59"],["2019/03/05/flannel优化方案/ksyun-vpc.jpg","dec4c177ea57215d78263680e5cce7e2"],["2019/03/05/flannel优化方案/ksyun-vpc2.png","9515f9f25045fd979814e45867b62788"],["2019/03/06/AutoScaler源码梳理/index.html","8985c22a48f9097d33bfc8c1307c5b54"],["2019/03/06/AutoScaler设计文档/index.html","ba7f332e9031621da4f66775563e3343"],["2019/03/06/AutoScaler设计文档/jg.png","d5e51cc14a90ffcf649feebaca8d1f40"],["2019/03/06/AutoScaler设计文档/sj.png","8fa0766962e0e28846d48e27be4d802d"],["2019/03/06/CSI解释/csi.png","02d20874b14b2d78d0fc5a622c59d225"],["2019/03/06/CSI解释/index.html","ddadf9ace746f735dd20d62ac00dd97e"],["2019/03/06/CSI解释/jg.png","f6c6f6723131b9a06c0c41c3038e316a"],["2019/03/08/etcd升级/1.png","e14120f07f20fe455387c77d1a152b39"],["2019/03/08/etcd升级/2.png","882286dc3c7921818e0449193747a5e8"],["2019/03/08/etcd升级/index.html","6c62dd6aa8d1fc6e8f4b09b0f2908a23"],["2019/03/12/大规模集群配置优化/index.html","565c613eb56f093b30a328d94ee21fe1"],["2019/03/14/k8s联邦集群/1.png","892079b01f88c06098620f9ea17c83a7"],["2019/03/14/k8s联邦集群/2.png","28cc33f334fde5722d4416cb3ac07419"],["2019/03/14/k8s联邦集群/index.html","83055c97c8508993644adc227e087dc5"],["2019/03/15/etcd-raft协议/1.png","f6d894b9d1a166fca948077e004ea77b"],["2019/03/15/etcd-raft协议/2.png","0d504d6e44abdb7d083e9e38f23c7128"],["2019/03/15/etcd-raft协议/3.png","cf956246ab49d6328efe45432d0eb6f5"],["2019/03/15/etcd-raft协议/4.png","7d0f80f3e0c4fa1660ea9333c8ff3c14"],["2019/03/15/etcd-raft协议/5.png","6b07c6799347602a44c7e114ca142b22"],["2019/03/15/etcd-raft协议/6.png","59e9a9f9ac1af7b16b32f489e4d0987a"],["2019/03/15/etcd-raft协议/7.png","6d3670bb75b49e61f7b11a11d6b33e57"],["2019/03/15/etcd-raft协议/index.html","72891374b84c8a34a8ea413247888df3"],["2019/03/18/Knative/eventing-concepts.png","8e123fa24060b845dff92f563bb625dc"],["2019/03/18/Knative/index.html","db0ada78c32c5d851e5ba1d1d5f38dd4"],["2019/03/18/Knative/knative-serving-object_model.png","07a3d760596958e60d04353e96989ce2"],["2019/03/19/API-Server简介/index.html","6810717e1d588e7485daedfa8dc9232e"],["2019/03/19/API-Server简介/kube-apiserver.png","786502cf5119f970014f0293ee3b7f7a"],["2019/03/19/pod限额/index.html","0f4fed86450d21b39817c242114ad9b7"],["2019/03/19/开放分布式系统追踪/1.jpg","d7f571b5f9d052a104afc10fd5089abe"],["2019/03/19/开放分布式系统追踪/2.png","692739b8c08b75a37ea11bd4e99fe92b"],["2019/03/19/开放分布式系统追踪/3.png","2eafb4006d79180fe65df6ad361648e5"],["2019/03/19/开放分布式系统追踪/index.html","fb1dc322f7ca21e6af3d4ad3a4153cc2"],["2019/03/20/docker架构/container.jpg","82e4cf04dac1b5faa8839c553f5abf34"],["2019/03/20/docker架构/docker-architecture.jpg","41cdc2bdeff20221c67563d673335a22"],["2019/03/20/docker架构/docker-daemon.jpg","ada09b4599d7fba5e93f5f06c9fc49c4"],["2019/03/20/docker架构/docker-server.jpg","b7ef1a7eb0e0b7aa93a9749f07977205"],["2019/03/20/docker架构/execdriver.jpg","0955bbf58b1ea973b17aca181b783fa3"],["2019/03/20/docker架构/graph-architecture.jpg","13f0019b41208d93b5eb410aa5697f76"],["2019/03/20/docker架构/graphdriver.jpg","baabb484a81bdfc8cff8d1b2d82d73b3"],["2019/03/20/docker架构/index.html","494bb1d854c80948107a6ea7e2860fec"],["2019/03/20/docker架构/libcontainer.jpg","11b23703e9ac5e07feca8f7e45227343"],["2019/03/20/docker架构/networkdriver.jpg","0c60de325753f7113e2ad7ffe382b8c4"],["2019/03/21/dockerfile/index.html","24907469b9c96114b2f7f28168291f13"],["2019/03/22/cAdvisor/index.html","2791c5a66a4a5f9f2f914dcca0ff15d9"],["2019/03/25/Controller-Manager/index.html","9293ceee8ada5a8d90292ca015f277ee"],["2019/03/26/docker-install/index.html","0ed1ecf3ebab9f9836ffa6404d539480"],["2019/03/27/Kube-Scheduler简介/index.html","37914d37df1c680a602f9b7aa8909d9c"],["2019/03/27/docker-hub/1.png","e5507698ae61180cda6fea420f6f0d1f"],["2019/03/27/docker-hub/index.html","207fa4c26bb6b6eee4b2709f05ea5946"],["2019/03/28/go-micro/1.png","d68a6155b14c26d88f996114b9d9b76d"],["2019/03/28/go-micro/2.png","7e0d67cffca9d1e2e244fb1b10b2d3c5"],["2019/03/28/go-micro/3.png","2e3fa601e57aca29436074540865f08a"],["2019/03/28/go-micro/4.png","dbc99c355715deb1f30866316bb2aada"],["2019/03/28/go-micro/index.html","061ab8d3120c6018d25b7978f4899e4b"],["2019/03/29/nginx虚拟主机-域名重定向/index.html","0848eb6b37d02fdccdc100348b7f5f9c"],["2019/03/29/openssl/index.html","2adfca737cb6ba1a448cd018894b2d66"],["2019/04/01/k8s-ResourceQuota/index.html","7f599442df401a9f14e4dbd0dfacdbf5"],["2019/04/02/Linux-bridge/index.html","03b35ac12ed97da125f6d847de54826b"],["2019/04/03/pod操作/index.html","ddfc5d5fccec59be949d1d3e2e252e2d"],["2019/04/08/pod介绍/index.html","85f1441908c1dd5a5c44c12d0e81e7f0"],["2019/04/09/pod生命周期/index.html","8bdd95a83e9f9e180ef22712b1f8f889"],["2019/04/10/git杂项/index.html","346c3a743fdb790d5ab75816c059d4ab"],["2019/04/10/pod-eviction/index.html","460b6fdb3bcffb06d1d8cbf9a4b2e2d3"],["2019/04/11/pod定义/index.html","891f7e02222a013e6cb71b999c2b4056"],["2019/04/12/pod检查/index.html","2b8d94f2a3618196b488d96d9d680acc"],["2019/04/15/Linux进程切换后台和切换pid/index.html","da5e7a807634b162e4e4981b12d1121c"],["2019/04/17/pod-volume/index.html","1285061d7577700c939be947798c590c"],["2019/04/18/pod-configmap/index.html","c2751d78dead2208cf3a5882ce9c5016"],["2019/04/23/docker代理/index.html","d24e28767d3699ef65c6a36323323e04"],["2019/04/25/pod调度/index.html","535bd910f96c6f8e2381fe5519381c00"],["2019/05/06/kubelet/index.html","f40493627a223180d161b2d55aec2fca"],["2019/05/10/debian9-8-docker-ce/index.html","0c86fd976174126e7cc76af0a7b128f9"],["2019/05/16/JetBrains-active/1.jpg","aeeb76422a11c8eac6b57ecd25add8a9"],["2019/05/16/JetBrains-active/index.html","876ca7262b8953bc4e2ad97e7cb0567c"],["2019/06/06/etcdctl/index.html","0d6666ee800e42ee581d69a37ca52b46"],["2019/07/01/ip-netns/index.html","8be9821ed117c35103ab453ed4a5e6cd"],["2019/07/01/ip-netns/ns-bridge.png","64e900c6f29c461f421f834e28d4b177"],["2019/08/16/etcd资源类型/index.html","b52617113385d865edc16643807df172"],["2019/09/19/mysql记录/index.html","d9f5c71fbbf3667b3cf13fe08fb09155"],["2019/09/24/nginx-ldap/1.png","8fcedda4aa25a39e013650472d36a2ba"],["2019/09/24/nginx-ldap/index.html","90def81067b7e16e78f73113f8fcf1fc"],["2019/10/08/windows-激活/index.html","85ffc96927e92c0b7b6ac1b338bc74ff"],["2019/10/09/harbor-能力测试/1.png","d1ac51cb130ea08428653ee8cdc08a85"],["2019/10/09/harbor-能力测试/2.png","8756b281c30edfe5f631f5ce3d654079"],["2019/10/09/harbor-能力测试/index.html","c2eaaea1eb03c66337ecfae504164146"],["2019/10/10/coredns/index.html","fe1af73edb20fdbab91079c88d9d04fd"],["2019/10/11/php-fpm优化/1.gif","de031333fade152256a9137bd2a58e61"],["2019/10/11/php-fpm优化/10.gif","d1a392dd4afe09e02853f0979a73fc9d"],["2019/10/11/php-fpm优化/2.gif","7c0ba3a9b7aeb98a1a0400733df7108e"],["2019/10/11/php-fpm优化/3.gif","ed589e333db2f36070274c404e5b4f0d"],["2019/10/11/php-fpm优化/4.gif","2849d3d426f1e10189ed471b6184d3f4"],["2019/10/11/php-fpm优化/5.gif","98a1decdd5b976c2be51f2b9ae5ed766"],["2019/10/11/php-fpm优化/6.jpg","8057f0500352d288d39e825c9a11eee9"],["2019/10/11/php-fpm优化/7.jpg","36888f7924973276b3fe44bf0a0a06f3"],["2019/10/11/php-fpm优化/8.jpg","9c562272b80febf6b9064b0e0506e11c"],["2019/10/11/php-fpm优化/9.jpg","1db2c5c3e773b2aab88ffc2233ebee10"],["2019/10/11/php-fpm优化/index.html","6d8bfb3cda7b08bd56c43234031e8efe"],["2019/10/28/nginx-geoip2-docker实现禁止某个地区或国家访问/index.html","6760529ce3c9a365c84019a7aabe6b40"],["2019/11/01/k8s集群-iptables-vs-ipvs性能测试/1.png","394840d5a1e6cd384504347a2d1ea65b"],["2019/11/01/k8s集群-iptables-vs-ipvs性能测试/2.png","03f3b0f3c9a0b48b2ff8e98398a139f6"],["2019/11/01/k8s集群-iptables-vs-ipvs性能测试/21.png","d202cf406eb4636bc1439c366fe38088"],["2019/11/01/k8s集群-iptables-vs-ipvs性能测试/3.png","cc374a668cc2519f075d43b696b35d5f"],["2019/11/01/k8s集群-iptables-vs-ipvs性能测试/32.png","4026d18a543cfe4d277ac3d2358c796a"],["2019/11/01/k8s集群-iptables-vs-ipvs性能测试/index.html","bcdf3173dce4b0edf8450ed56530d784"],["2019/11/06/k8s容器固定ip/index.html","3895b8c83a227a5498d206097a1d6d7c"],["2019/12/13/Kubernetes-实战-Operator-Finalizers-实现/index.html","3d50906a8757d8e02b3d8f5c76057e6a"],["2019/12/16/pod访问svc不通问题/index.html","fd68cc593a6ede43522eccbce733d528"],["2019/12/26/vim使用方式/index.html","896fb920a03d9bdd097e8176aabbf918"],["2019/12/26/vim使用方式/l.png","af5f214407710d90ede939c77e4b1a47"],["2019/12/26/vim使用方式/m.png","320971c964c6ae76403db5f34874a3f1"],["2019/12/27/etcd性能/index.html","e71804fae216bc45f1b28f39a3d3dc75"],["2020/01/07/kubemark测试k8s集群/index.html","f8f074737beb48d7d2eb77d1850156b9"],["2020/02/02/coredns解析集群node节点/index.html","096f650fd77516d8517727fb4000525b"],["2020/02/18/hexo博客同时部署到github和VPS上/index.html","9c3023a8b6e456129a7821bb4e97d1d4"],["2020/02/26/golang依赖管理/index.html","0a42f635c56b3c382f2524f494cb59c6"],["2020/03/01/kubefed环境搭建/index.html","7302483c50dbd9d741f8d7b523a1d644"],["2020/03/08/多集群资源统一管理之Federation-v2/KubeFedv2-arch.png","981e5804c686b8d63519ab8e12651402"],["2020/03/08/多集群资源统一管理之Federation-v2/index.html","c58a178f8fe80774d82463e721fd5c46"],["2020/03/08/多集群资源统一管理之Federation-v2/rsp.png","fca0361c249ebaff7268ed64e5e21806"],["2020/03/08/多集群资源统一管理之Federation-v2/service-dns.png","09bef6f374497a9cce16e92522dbef84"],["2020/03/08/多集群资源统一管理之Federation-v2/sync-controller-1024x603.png","da1412f23cfcb4857f24b2d01ba1e3d8"],["2020/03/10/集群日志审计/image2019-10-8_17-31-8.png","8f27983634e84c1c249fd80fbb3d6647"],["2020/03/10/集群日志审计/image2019-10-8_17-40-17.png","0c4ee14bea5e51beb5ef58a01064e2bb"],["2020/03/10/集群日志审计/image2019-10-8_17-49-21.png","33c4fac11aa78065f9f1f8955f4dbed1"],["2020/03/10/集群日志审计/index.html","2ad2b61f27110a1ae070dc01d9c549f3"],["2020/03/10/集群日志审计/审计.jpg","8daa95f1eb715d6b446afe04c426ebd3"],["2020/03/11/python-图片文字识别-二维码识别/index.html","4256b3e6aee1d6c20fbd83cf5d4199ef"],["2020/04/01/docker看veth对/index.html","61608692b9340c4f51d0a2750c69ec22"],["2020/04/03/理解Go-Context机制/index.html","b0c5f631c0fe92563b3ee843d6ecb9d9"],["2020/04/15/centos7安装kernel-4-x/CentOS-7-1-Running-Oracle-VM-VirtualBox_001.jpg","245cd8a52ea593ec66acf9a0be3bde77"],["2020/04/15/centos7安装kernel-4-x/CentOS-7-1-Running-Oracle-VM-VirtualBox_002.jpg","32348e0623a6dea75f9f450dfa2d7da7"],["2020/04/15/centos7安装kernel-4-x/index.html","63d0a2652db9647b9ef38921a43706f6"],["2020/04/18/Golang-sync-Mutex用法（互斥量用法）/index.html","0a86e12040e982ba18f1954d353dbfcb"],["2020/04/20/k8s节点下线/index.html","9b79b333ae2bc7f5db1c45cf52d3a24a"],["2020/04/26/nginx日志时间输出/index.html","a2aae46ccb5d86867ec2c538f18c89c2"],["2020/05/03/etcd数据库异常/index.html","e36600f0adfe5b0a09b46a16b646caa8"],["about/index.html","92d49d66469357c274ce97cb34933ffd"],["about/index/wx.jpg","6c5e9dfc0e0fd000b1b1f25adce61d75"],["archives/2013/09/index.html","2e698275e7f31681695fc93c45347d06"],["archives/2013/index.html","f7b19abbfbb4e4d684416a25ed0e1838"],["archives/2015/06/index.html","cc69ae6a82637c00c1d48771bddbafac"],["archives/2015/index.html","19570916f08472ed3eb26275a98ee5ba"],["archives/2016/04/index.html","c7e9e3c5ba72225d6f4b9554c44092dc"],["archives/2016/index.html","badbeaabbdc2ddbece66ddf7b6582f68"],["archives/2017/01/index.html","3ffd6f2c595b85fd6ef46e148bae4718"],["archives/2017/index.html","0b0f4658ef493a625a8a50bc979333d0"],["archives/2019/01/index.html","1822f59772d642f8bfa6415a41d4336f"],["archives/2019/02/index.html","9e7881d286327902a749fa7ff4389040"],["archives/2019/03/index.html","97b12808ab8c106d6a315d9a1e717c0e"],["archives/2019/03/page/2/index.html","15a5719c48114fbfc1fe0bc887697e45"],["archives/2019/03/page/3/index.html","5627cf0a802e1cf7fc131d8482d0cd27"],["archives/2019/04/index.html","9a63ce2aba661ac4220aafb0c77c710b"],["archives/2019/04/page/2/index.html","3e07b423389623803588a52bdf6d048f"],["archives/2019/05/index.html","0d91b8b76d77cc77f7b99cb576046fd6"],["archives/2019/06/index.html","a5bc68d34ace7d9f4de62434ccaaaa94"],["archives/2019/07/index.html","4cccb929a44b79ebbce30d493b1d62d8"],["archives/2019/08/index.html","9f7a99679750da97028bb4eb6bd05f6e"],["archives/2019/09/index.html","f033b924f35f07d12bf748c2e2ad9e49"],["archives/2019/10/index.html","fa1b1dab6f55d8b0dad69a994b64cd44"],["archives/2019/11/index.html","7dba1c190b8b38e21808a09a4d1397a0"],["archives/2019/12/index.html","5a71cb7181d9801c33e0251458d5fc06"],["archives/2019/index.html","57c475314397f9a84cacd24b55eea273"],["archives/2019/page/2/index.html","21ab3997306e5d1d18264ac5f32a5be1"],["archives/2019/page/3/index.html","b6fb310fb34f30cf7059f45535912478"],["archives/2019/page/4/index.html","2cd6f4b80bf219597d74270c434ded12"],["archives/2019/page/5/index.html","eb2aeb20b7b1cb09c39345d10541ce64"],["archives/2019/page/6/index.html","b4f2fe98e05f29442bb63b77f9b82ebd"],["archives/2019/page/7/index.html","13b918f933683f3cc7e31c6367fcf5de"],["archives/2020/01/index.html","f50d08df8040687394042486b873a8c3"],["archives/2020/02/index.html","a1b558f1abffd71754386d9e80aa6da5"],["archives/2020/03/index.html","5937e615e698491e023fa5c7d25dbce9"],["archives/2020/04/index.html","c383c4732217d25db9fcfec6ede648df"],["archives/2020/05/index.html","dde99162e2141c99ab7f4a356a99aa90"],["archives/2020/index.html","1391a087eb554274a4869310bf78f19a"],["archives/2020/page/2/index.html","fc7ddbc78b16ec238633fdd79c8f9611"],["archives/index.html","41a25b2741a43d07c0023d2285690dca"],["archives/page/2/index.html","198db42475fe5fe283b22e89d13ee65c"],["archives/page/3/index.html","32daa6f188b8fdd937a93a97191ba584"],["archives/page/4/index.html","f1052736321d9e08ef159b6d46c1e506"],["archives/page/5/index.html","db07fda561b5f618eda3614df43b4f19"],["archives/page/6/index.html","7977fa3f74f7352e100eb4fb78626e71"],["archives/page/7/index.html","f79ec7c0ba3d7f201b509331e783eb52"],["archives/page/8/index.html","9fbfb913c3e51713c825320641098ae9"],["archives/page/9/index.html","b529821ae89e4a4ff730b67b23ffaa76"],["categories/Idea/index.html","ed11732917e15078a5eeb9f34ae27c23"],["categories/Kubernetes/index.html","09270b668ee79a3ef780a758bdb4f6df"],["categories/Kubernetes/page/2/index.html","b48d7b9961a969cf09d1c68a71be9724"],["categories/Kubernetes/page/3/index.html","ad673497b40e6c14acc421ebe4d953c9"],["categories/Kubernetes/page/4/index.html","825dc0d675d10f25d9a4f6bdae3cb194"],["categories/Kubernetes/page/5/index.html","c5d950314a63d6adaa9ea343bb952af0"],["categories/Kubernetes/page/6/index.html","60b0bb70a70019fdaaa11d58eba69cdf"],["categories/Kubernetes/page/7/index.html","151e8b858518f04022cbd6553e59bda3"],["categories/Linux/index.html","de8ccd1648bc6a2bad7553602c71e159"],["categories/Openstack/index.html","4e9b8081bfc6e962c1c72f268155c17c"],["categories/Python/index.html","8a7821f1d12c8e40b6856ed3816f5da7"],["categories/db/index.html","29eaf7269d85d15342c8c25c65d78684"],["categories/hexo/index.html","9f377534b47b4345f8da37f1d3d6afa7"],["categories/index.html","2c5228b7c926695dd5375ecf394c74f9"],["css/main.css","5fa227e46467608dba444bc852fc5392"],["images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["images/avatar.gif","1b5a9935d82cbc3a6d4715c36da88180"],["images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["images/wechatpay.jpg","f717baa24ca8c91958f84d28b2b54903"],["index.html","142cf108fc120fdb099cabb8345ed795"],["js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["js/src/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["js/src/utils.js","5626093e184694b3861569542ca618e2"],["lib/font-awesome/css/font-awesome.css","c56891e73d94228fccab2bb436420880"],["lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["lib/source/lib/canvas-nest/README.html","a3068631c9280326383fb58b8e63cfde"],["lib/source/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["lib/source/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["page/2/index.html","ba5c14e6f35de6e8448cda7b1f7e87e1"],["page/3/index.html","bfd2a2fcd1c5d4146d3eedf1ee1c9b28"],["page/4/index.html","e9dd40f401dc188c2ec38bc6774d1348"],["page/5/index.html","f2f117897d901387eed57fdef807ebc9"],["page/6/index.html","4486df7cc9ad5434e4b868871268b60b"],["page/7/index.html","0d8bca93cdde7a79b49dad401f58ea28"],["page/8/index.html","10f08c7d5501f148d0f949c21aa617d6"],["page/9/index.html","118fe094d8f5824c102427b02083e88d"],["tags/Go/index.html","bef52f713a37ad921570acb98881be82"],["tags/JetBrains/index.html","a42585123db8b16b43d210013f8c09a4"],["tags/ResourceQuota/index.html","cf8b44d5425ecdd394fd7443cdd4b31a"],["tags/adsense/index.html","9dc8f707fc17b4551ff475245c4aac7c"],["tags/bash/index.html","4ad790fd91414f182f2045e07c61eec6"],["tags/bridge/index.html","0d51725928d62d88945b99b0461c0aad"],["tags/cAdvisor/index.html","1fffbd2ac48bc36a3723d51e11dd1a86"],["tags/cinder/index.html","6e79e41f8da83dbc722e2ec921de0d9d"],["tags/configmap/index.html","1d356646b0b419251333c825d7aaaaa9"],["tags/dns/index.html","3fe7cefb895a0d522528e6efbbb38642"],["tags/docker/index.html","6ad9ff74b3f7eb9a7603d586664596bd"],["tags/etcd/index.html","84ed5329e019fb5f487a49a0a65ca2df"],["tags/federation/index.html","d87744c69d8ea3b5e10126ee1090ac99"],["tags/flannel/index.html","98e78ee606fd3dd572c2ffa6ef036315"],["tags/git/index.html","ac672f607a158a5c2f7fcac42fce719d"],["tags/go-micro/index.html","0c04288a3b0101c10d0dafc3b8b1d4c7"],["tags/go/index.html","357e27259d17be9e2613e95310bdc3d1"],["tags/hub/index.html","73afe3d64922858dd53b6182752df648"],["tags/index.html","fb384d65cbf79598667f5c04d93d61fe"],["tags/k8s/index.html","68d4578b3535083e6345d89d1669e933"],["tags/kubelet/index.html","04afd57d76acd008758c7e991b5386c4"],["tags/linux/index.html","f6f9cc2818344eddb0666334083cb6c5"],["tags/mysql/index.html","e581945cb510286b248d754e7c66e052"],["tags/netns/index.html","d21ba0528ec115c6a7de37676ae29b12"],["tags/network/index.html","33ac6707e78345569aaa166e1c875d6d"],["tags/neutron/index.html","b819d307a520f9956f3358719d6071fd"],["tags/next/index.html","c5fc0d7d936224d7153610f6f0964a0e"],["tags/nginx/index.html","e4ae5971db338e5275cc56dfac278ecd"],["tags/node/index.html","7d3054498aae13d02d7b3e216a2f941e"],["tags/op/index.html","5235cf31511e411d4cf52d423f7c8cfc"],["tags/openssl/index.html","b1028752d36d12b4c3ad6c4eee5b87e6"],["tags/php/index.html","0675e8ef2e1e986407bbb98ac16f9612"],["tags/pid/index.html","610cd36ed30d1caf973e194598ccd978"],["tags/pod/index.html","62c622a9b83244acf9f00d0245a41f05"],["tags/python/index.html","f0080e16ea44a61244710d25348672a7"],["tags/rabbitmq/index.html","d192bb9d845ff1b851e311e92bc080d1"],["tags/scheduler/index.html","a523b85732f9e5cbba0cc5b5f037a9d8"],["tags/serverless/index.html","01f8e6785cf25262777f4918cb19c3ed"],["tags/vim/index.html","ea134ace91c23a11fd5f34bcba936b4c"],["tags/volume/index.html","72958ffd7e05d837d1f68162f4dce7d4"],["tags/windows/index.html","348d74f73c7bf2b13e97eabb3559d1b3"]];
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







