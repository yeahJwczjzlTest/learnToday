<?xml version="1.0" encoding="UTF-8" standalone="no"?><map version="0.8.1"><node CREATED="1496384552650" ID="5g34moe8t9n4qkrs1td0q2db6b" MODIFIED="1496384552650" TEXT="NFS"><node CREATED="1496384552651" ID="3t85nltveo8f2hvt66ee96e3h1" MODIFIED="1496384552651" POSITION="right" TEXT="NFS Client Mount 挂载参数列表 mount -o "><node CREATED="1496384552651" ID="58gsvdao11pvk1rq2e2qdk850h" MODIFIED="1496384552651" TEXT="fg    bg    前台运行   后台运行"><node CREATED="1496384552651" ID="0c2fp1f7qq4mba751jgf9dogaf" MODIFIED="1496384552651" TEXT="默认 fg"/></node><node CREATED="1496384552651" ID="19327vn8pdhf0m0765junkcvd0" MODIFIED="1496384552651" TEXT="soft 软挂载 : 尝试挂载超时后自动停止"/><node CREATED="1496384552651" ID="6rimj6c5a2nrdmc1776paiih3s" MODIFIED="1496384552651" TEXT="hard : 硬挂载 不停的进行挂载操作 无法kill umount"><node CREATED="1496384552651" ID="0sorkac52da6baenr225cmvkjs" MODIFIED="1496384552651" TEXT="默认"/><node CREATED="1496384552651" ID="5pvd8j6bc6bcaui20t7a24i8bj" MODIFIED="1496384552651" TEXT="超时也不停止"/></node><node CREATED="1496384552651" ID="3ue47bk3vhmid35fujuhn1jdls" MODIFIED="1496384552651" TEXT="intr 配合 hard 挂载使用,应挂在超时后会被中断 避免整个系统被NFS锁死"/><node CREATED="1496384552651" ID="2t2u0skpfpeaaugu5kdcid2jco" MODIFIED="1496384552651" TEXT="rsize &amp; wsize"><node CREATED="1496384552651" ID="1qnl74spepss149e7l35mjbh1q" MODIFIED="1496384552651" TEXT="读写区块的大小"/><node CREATED="1496384552651" ID="08edkht1vlrfphno43m832gent" MODIFIED="1496384552651" TEXT="影响数据存储的缓冲量"/><node CREATED="1496384552651" ID="0gvsqthimnjtjqnb5cn5hp094m" MODIFIED="1496384552651" TEXT="性能优化参数"/></node><node CREATED="1496384552651" ID="6qdps1qd24snah1oicdn8h2h10" MODIFIED="1496384552651" TEXT="proto"><node CREATED="1496384552651" ID="0r9np616h43hbv7vjpmhl8ig01" MODIFIED="1496384552651" TEXT="协议默认 proto=tcp"/><node CREATED="1496384552651" ID="5ko1na4qo8ti90mk0jpqpbd7q9" MODIFIED="1496384552651" TEXT="如果使用UDP 在 LAN 中传输可以获得更好的性能"/><node CREATED="1496384552651" ID="4vseb1v98mv6qkbajn3kovo175" MODIFIED="1496384552651" TEXT="如果要跨越 Internet 的话,使用 TCP 会有更好的纠错能力"/><node CREATED="1496384552651" ID="4lk1od8ur7ka44uco79dhoi24a" MODIFIED="1496384552651" TEXT="TCP 会检测数据是否到达,并采取措施保障数据有效性"/><node CREATED="1496384552651" ID="0moedncvsfa7hgo9speb0aei9h" MODIFIED="1496384552651" TEXT="UDP 直接发送完了不检查.速度性能高,但有效性低"/></node><node CREATED="1496384552651" ID="4std3rd04j70imcr6faeij173b" MODIFIED="1496384552651" TEXT="举例 =&gt; "><node CREATED="1496384552651" ID="1prvp376njv9q64805h8pvase4" MODIFIED="1496384552651" TEXT="mount -t ext4 -o bg,hard,intr,rsize=524288,wsize=524288 172.31.15.27:/data /mnt"/></node><node CREATED="1496384552651" ID="03h6nh6b9hge0kfhemgrrdp97k" MODIFIED="1496384552651" TEXT="/etc/fstab 挂载选项中的 defaults"><node CREATED="1496384552651" ID="1h8olu8885292nv0hnmidvs0mh" MODIFIED="1496384552651" TEXT="rw,suid,dev,exec,auto,nouser,async"/><node CREATED="1496384552651" ID="7rr8b4jqrvucvu2abn7o17s675" MODIFIED="1496384552651" TEXT="exec 允许执行二进制"/><node CREATED="1496384552651" ID="2jfe9sa73sha5cv9151rje0799" MODIFIED="1496384552651" TEXT="noexec 不允许运行二进制文件"/><node CREATED="1496384552651" ID="48lr15ms56f04sfg71gffbe54k" MODIFIED="1496384552651" TEXT="noatime 不更新文件系统上 inode 的访问时间适用于 高并发环境"/><node CREATED="1496384552651" ID="4k59naen6284sfoscvrd8m56k7" MODIFIED="1496384552651" TEXT="nodiratime 不更新文件系统上的 directory inode 访问时间 适用于高并发环境 提高IO性能"/><node CREATED="1496384552651" ID="5q2gbep5a64ao8fcqnm7vf329o" MODIFIED="1496384552651" TEXT="nosuid 不允许在文件系统上设置 suid 位"/><node CREATED="1496384552651" ID="2lov65c7in289ukct81iq4agmf" MODIFIED="1496384552651" TEXT="suid 允许使用 suid 位"/><node CREATED="1496384552651" ID="4umbis532b3h15lrhhk3shf4ti" MODIFIED="1496384552651" TEXT="&lt;html&gt;&lt;img src=&quot;images/2id30acqp3rq9kb2sh87gut80s.png&quot;&gt;"/></node><node CREATED="1496384552653" ID="24a1hfithtl4t1i1dc7o9r8fpn" MODIFIED="1496384552653" TEXT="man nfs 查看"/></node><node CREATED="1496384552653" ID="4ibog1rh6qjn01lujh7dvin6g4" MODIFIED="1496384552653" POSITION="right" TEXT="主要用于存储"><node CREATED="1496384552653" ID="13smev7kvoqr2fffs3qiu0s7la" MODIFIED="1496384552653" TEXT="图像"/><node CREATED="1496384552653" ID="48stl1vdeugl07s795re03tt8c" MODIFIED="1496384552653" TEXT="视频"/><node CREATED="1496384552653" ID="1v0ehfn72afids6077aqk2jnj9" MODIFIED="1496384552653" TEXT="附件"/><node CREATED="1496384552653" ID="1d256r426m9u9o3ki3q1u5b5bs" MODIFIED="1496384552653" TEXT="等,静态资源文件"/><node CREATED="1496384552653" ID="7it8ttb43igk2pdbfbec8342to" MODIFIED="1496384552653" TEXT="由用户上传的"/></node><node CREATED="1496384552653" ID="7rd03oe1q8kjd4ifekffou2ao2" MODIFIED="1496384552653" POSITION="right" TEXT="rpc 服务 =&gt; rpcbind(中介,先启动)"><node CREATED="1496384552653" ID="59vntvfquafjht1ek1rpppkiih" MODIFIED="1496384552653" TEXT="客户端"><node CREATED="1496384552653" ID="3d0pbkm72avicihbdhoul6kskd" MODIFIED="1496384552653" TEXT="1 用户访问 web 服务器挂载点"/><node CREATED="1496384552653" ID="28r221vknbg63latrc6l7ab6a9" MODIFIED="1496384552653" TEXT="2 web 服务器(NFS 客户端)中的 RPC 服务 (rpcbind) 通过网络到 NFS 服务端的 RPC 服务"/><node CREATED="1496384552653" ID="1gnsjukbikrrl78mrqidvnrhi8" MODIFIED="1496384552653" TEXT="4 NFS 客户端拿到端口,访问 NFS 服务端"/></node><node CREATED="1496384552653" ID="14e01qbhhfg5huo37am7jft99s" MODIFIED="1496384552653" TEXT="服务端"><node CREATED="1496384552653" ID="4011ip0ob2ipge5c9hc4de9lul" MODIFIED="1496384552653" TEXT="3 NFS 服务端的 RPC 服务将客户端需要的端口返回"/><node CREATED="1496384552653" ID="4i5otq5vmt01uf41uq7d2evdii" MODIFIED="1496384552653" TEXT="5 服务器本地的数据读取写入操作"/></node><node CREATED="1496384552653" ID="3c4srk06r6fllhn83ah02qjeub" MODIFIED="1496384552653" TEXT="NFS 的 RPC 服务器在 CentOS 5.x 叫 portmap ,在 CentOS 6.x 叫 rpcbind"/></node><node CREATED="1496384552653" ID="7rum42ucu32sbfkpa9jqbai4dm" MODIFIED="1496384552653" POSITION="right" TEXT="Server 端设置"><node CREATED="1496384552653" ID="2oqtav71pao6qjlpleugot1la3" MODIFIED="1496384552653" TEXT="nfs-utils"><node CREATED="1496384552654" ID="2um0kna8eufra4k27kpqngptmv" MODIFIED="1496384552654" TEXT="rpc.nfsd"/><node CREATED="1496384552654" ID="3r82cuq5a9ij352bsl3hopu4ao" MODIFIED="1496384552654" TEXT="rpc.mountd"/></node><node CREATED="1496384552654" ID="6b5lad02gsfjflttkhj22f6gmj" MODIFIED="1496384552654" TEXT="rpcbind"/><node CREATED="1496384552654" ID="327p1onu1dn2le9usft807fain" MODIFIED="1496384552654" TEXT="rpm -qa nfs-utils rpcbind"><node CREATED="1496384552654" ID="79a905ach5n29m8s4qkuo1a96s" MODIFIED="1496384552654" TEXT="查看有没有安装"/></node><node CREATED="1496384552654" ID="3buqt0n9pcie6mmn5vkvrji1ou" MODIFIED="1496384552654" TEXT="安装软件的三种方法"><node CREATED="1496384552654" ID="3hitqk0p1pa7ibvkb6gjoneqpm" MODIFIED="1496384552654" TEXT="使用 yum install 包名 进行安装"/><node CREATED="1496384552654" ID="2bnqq7cn548ihdauqfv3c4cqh5" MODIFIED="1496384552654" TEXT="挂载系统镜像"><node CREATED="1496384552654" ID="5gqjt1kqosnka8aguvn2k6ou6e" MODIFIED="1496384552654" TEXT="rpm -ivh 包名  进行安装"/></node><node CREATED="1496384552654" ID="49a80bv61kd5s01uhdk0300u55" MODIFIED="1496384552654" TEXT="在 LANG=en 下通过 yum grouplist|grep -i nfs 找到包组"><node CREATED="1496384552654" ID="09ch0mt6gi9ing2for7dei9jha" MODIFIED="1496384552654" TEXT="yum groupinstall &quot;NFS file erver&quot; -y"/></node><node CREATED="1496384552654" ID="00blrr7781g7e445h02p5e9lab" MODIFIED="1496384552654" TEXT="编译安装~"/></node><node CREATED="1496384552654" ID="3hhniuahfdbqij3o4v74sstere" MODIFIED="1496384552654" TEXT="启动 rpcbind =&gt; /et/init.d/rpcbind start"><node CREATED="1496384552654" ID="319f327sg85aoe7ac3s983ep73" MODIFIED="1496384552654" TEXT="查看进程信息"/><node CREATED="1496384552654" ID="7h8mfachh7k9b4g216i65khe2g" MODIFIED="1496384552654" TEXT="netstat -lntup|grep rpcbind"><node CREATED="1496384552654" ID="5fek4tpos5k2ta1si4cojjll4c" MODIFIED="1496384552654" TEXT="rpcbind 默认端口 111"/></node><node CREATED="1496384552654" ID="187rr74u8hs3a2sk0igt262kuh" MODIFIED="1496384552654" TEXT="lsof -i:111"/></node><node CREATED="1496384552654" ID="3ujkf25l3c15oh7mk234iosbd9" MODIFIED="1496384552654" TEXT=" 检测rpc里面有没有信息 rpcinfo -p localhost"/><node CREATED="1496384552654" ID="60cp2ii76ngrm6njnhg917hchs" MODIFIED="1496384552654" TEXT="启动 NFS /etc/init.d/nfs start 查看进程 netstat -lntup|grep 2049 默认主端口 2049"/><node CREATED="1496384552654" ID="19c7gt4qctkb4kni4gunn585m5" MODIFIED="1496384552654" TEXT="自启动顺序 less /etc/init.d/nfs 找到 chkconfig -30 60 对比一下 rcbind 的启动顺序"/><node CREATED="1496384552654" ID="1t3ogvo8b22ia7ammcoq6f9l02" MODIFIED="1496384552654" TEXT="不使用 chkconfig 管理启动项,使用 rc.local"/></node><node CREATED="1496384552654" ID="5pdla3ecu44p4t2micbug8s7rm" MODIFIED="1496384552654" POSITION="right" TEXT="NFS 参数 /etc/exports"><node CREATED="1496384552654" ID="121f2t0rou9pgktptd4lkkju68" MODIFIED="1496384552654" TEXT="rw 读写"/><node CREATED="1496384552654" ID="5ppehs1vhbh4hkrdj5tgvg6n5u" MODIFIED="1496384552654" TEXT="ro 只读"/><node CREATED="1496384552654" ID="41bh36rb3vrtgmuripihv66nrg" MODIFIED="1496384552654" TEXT="sync 同步写入"><node CREATED="1496384552654" ID="5ek3knio3plj0h5q6nj6lsbn8n" MODIFIED="1496384552654" TEXT="在客户端写数据的时候,会同步写到服务器磁盘上"/><node CREATED="1496384552654" ID="33mp5nqls7sj8h39tengfqunr6" MODIFIED="1496384552654" TEXT="优点:数据不会丢失"/><node CREATED="1496384552654" ID="7ogsou0bpmjcko1990hk3ntae6" MODIFIED="1496384552654" TEXT="缺点:性能差一点"/></node><node CREATED="1496384552654" ID="4g0qu50ravsoc2fb3bgimg82nf" MODIFIED="1496384552654" TEXT="async 异步写入"><node CREATED="1496384552654" ID="5eo6qp4udbgoi2shg7cgf0a360" MODIFIED="1496384552654" TEXT="写文件的时候 先返回状态结果"/><node CREATED="1496384552654" ID="0eshkvjr5f0vsh9f1ieg646kb7" MODIFIED="1496384552655" TEXT="先写入内存,再存到硬盘,性能高,但是不安全"/><node CREATED="1496384552655" ID="3ob94rdgpfbvu2a8q4bssm5mff" MODIFIED="1496384552655" TEXT="产生延迟,短时间数据不一致"/></node><node CREATED="1496384552655" ID="5e46qnsn26p1tn2kt367ck9kl4" MODIFIED="1496384552655" TEXT="no_root_squash"><node CREATED="1496384552655" ID="0900m99tu30uarqv6sj3eue59b" MODIFIED="1496384552655" TEXT="登陆的客户端使用的是 root 用户,那么访问nfs服务器就拥有 root 权限"/></node><node CREATED="1496384552655" ID="2nirm1s79ifkv2qes2nuslfv0s" MODIFIED="1496384552655" TEXT="root_squash"><node CREATED="1496384552655" ID="4sg2c2u3g624lfkiutt8mhn7mn" MODIFIED="1496384552655" TEXT="对于访问 NFS Serer 的客户端,使用root用户会被压缩成匿名用户 UID 和 GID也会变为 nfsnobody 用户的"/></node><node CREATED="1496384552655" ID="62n0dv3q224a66o2hfeqc9ormh" MODIFIED="1496384552655" TEXT="all_squash"><node CREATED="1496384552655" ID="2i9uj32rbhkqveo8tbjnm0of0l" MODIFIED="1496384552655" TEXT="不管访问的用户是什么,都变成匿名用户"/></node><node CREATED="1496384552655" ID="741aadn1k5erot8tc7eprfjonk" MODIFIED="1496384552655" TEXT="anonuid"/><node CREATED="1496384552655" ID="1paj94otspfjjgfetvpki4u91t" MODIFIED="1496384552655" TEXT="anongid"/><node CREATED="1496384552655" ID="4gg4hs0u2p6738irrelhi4tfg8" MODIFIED="1496384552655" TEXT="其他参数"><node CREATED="1496384552655" ID="1qkm4899t9jrkobklg04gn45vg" LINK="http://www.cnblogs.com/wspblog/p/5673924.html" MODIFIED="1496384552655" TEXT="NFS &amp; mount 常用参数详解"/></node><node CREATED="1496384552655" ID="1ggot6u9s486o99c7cl2spgcde" MODIFIED="1496384552655" TEXT="常用的配置 (/etc/exports)"><node CREATED="1496384552655" ID="03e1ftjbd029u76lf207tsqmfp" MODIFIED="1496384552655" TEXT="/data 172.31.14.0/24(rw,sync,all_squash)"/></node><node CREATED="1496384552655" ID="029b9ri1udb7qbjtpqo276561n" MODIFIED="1496384552655" TEXT="参数以 anon* 开头的都是指 anonymous 匿名用户,这个用户的 UID 通常为 nfsnobady 的 UID 值&#10;用户也可以自行设置,但是必须存在于 /etc/passwd 里面.作用:多 client 写入的时候可以通过此项设置&#10;保持共享文件夹内拥有一致的文件权限和属性"/></node><node CREATED="1496384552655" ID="0ik7srdl1ov963f91ijasdr2h6" MODIFIED="1496384552655" POSITION="right" TEXT="NFS 服务剖析"><node CREATED="1496384552655" ID="6t8iuajgi5flj99lnavrl0b4r3" MODIFIED="1496384552655" TEXT="nsfd 主进程"><node CREATED="1496384552655" ID="7vm2s4j5chechfhv7d75u63vgn" MODIFIED="1496384552655" TEXT="管理登陆"/><node CREATED="1496384552655" ID="2jgnphcjv59lrgta2dejffs24u" MODIFIED="1496384552655" TEXT="ID 身份判定"/></node><node CREATED="1496384552655" ID="18aeonjj8m58b8440s98eqto9l" MODIFIED="1496384552655" TEXT="rpc.statd"><node CREATED="1496384552655" ID="39iohji63lfsvsbbkpupare7dc" MODIFIED="1496384552655" TEXT="检查文件一致性"/></node><node CREATED="1496384552655" ID="7vji4hnuh56m4h22puc1i083d0" MODIFIED="1496384552655" TEXT="rpc.rquoad "><node CREATED="1496384552655" ID="3i01nfvl2890qam29fovgb3ei1" MODIFIED="1496384552655" TEXT="磁盘配额进程"/></node><node CREATED="1496384552655" ID="6mik7nrbni6066edpab153ncbr" MODIFIED="1496384552655" TEXT="rpc.mountd"><node CREATED="1496384552655" ID="361tkem3tlmcmkjitnc5vd4e55" MODIFIED="1496384552655" TEXT="权限管理验证等"/></node><node CREATED="1496384552655" ID="6o7l8lkami0jf0umikusr8rjvc" MODIFIED="1496384552655" TEXT="rpc.idmapd"><node CREATED="1496384552655" ID="4ei1mh1lg978kk1vf40pk8gsk2" MODIFIED="1496384552655" TEXT="名称映射"/></node><node CREATED="1496384552655" ID="19v1cbmaeav416sji6vrvlfu40" MODIFIED="1496384552655" TEXT="rpcinfo - report RPC information"><node CREATED="1496384552655" ID="542jhnqrak3l8hu71l99sf2s3g" MODIFIED="1496384552655" TEXT="rpcinfo -p localhost 查看RPC信息"/></node><node CREATED="1496384552655" ID="0m7hsh16n3t847e3u04j5ki2ff" MODIFIED="1496384552655" TEXT="ps -ef|egrep &quot;rpc|nfs&quot; 查看进程"/></node><node CREATED="1496384552655" ID="7s1sb3lo64cd3qam9k2r6fqbg9" MODIFIED="1496384552655" POSITION="right" TEXT="配置服务器"><node CREATED="1496384552655" ID="77r6t7hm9djt11ptq48osdii10" MODIFIED="1496384552655" TEXT="/etc/exports NFS 的配置文件"><node CREATED="1496384552655" ID="1r2ckcneuobg0912juf1rcci2g" MODIFIED="1496384552655" TEXT="默认空的"/><node CREATED="1496384552655" ID="3oufqr130p25ri8ngiqbjd05bv" MODIFIED="1496384552655" TEXT="&lt;html&gt;&lt;img src=&quot;images/5rkpg5kk1o4qmvv9j1u547u5j4.png&quot;&gt;"/></node><node CREATED="1496384552656" ID="2c5qsd7tquhbc2roo4hm6r3j27" MODIFIED="1496384552656" TEXT="简单配置"><node CREATED="1496384552656" ID="68p6ocujm0ks2pu0kpk92bdshg" MODIFIED="1496384552656" TEXT="/data&#9;172.31.15.0/24(rw,sync)"/><node CREATED="1496384552656" ID="3jn1fl16ktd7c085omga8ru05l" MODIFIED="1496384552656" TEXT="读写权限,并同步写入磁盘"/><node CREATED="1496384552656" ID="3eagh18v4oea44rm32ntptrv7o" MODIFIED="1496384552656" TEXT="exportfs -rv === /etc/init.d/nfs reload"><node CREATED="1496384552656" ID="26u5m2d6ddfipbf448pgjpv9t0" MODIFIED="1496384552656" TEXT="加载/data"><node CREATED="1496384552656" ID="4bvl89v7jo22pohak6dj521jrt" MODIFIED="1496384552656" TEXT="exporting 172.31.15.0/24:/data"/></node></node><node CREATED="1496384552656" ID="57r67k9agec61ug4872ouerhel" MODIFIED="1496384552656" TEXT="重启 nfs 服务器"/><node CREATED="1496384552656" ID="41vrsgqg0tnp8sdvb3aflj81e2" MODIFIED="1496384552656" TEXT="查看本机共享的文件夹"><node CREATED="1496384552656" ID="2vmv82d9n3dotq7eeen58pq3nb" MODIFIED="1496384552656" TEXT="showmount -e localhost"/></node></node><node CREATED="1496384552656" ID="0hptnho0l2h2nrgh058e3v8uio" MODIFIED="1496384552656" TEXT="挂载后不能写,是因为有默认权限"><node CREATED="1496384552656" ID="31i2lvfovuai3vmafr8hrrmqpi" MODIFIED="1496384552656" TEXT="查看默认权限位置"/><node CREATED="1496384552656" ID="1e6qmkujjk9ha336u8pn8852vq" MODIFIED="1496384552656" TEXT="/var/ib/nfs/etab 中有 anonuid 和 anongid"/><node CREATED="1496384552656" ID="7iu3oaptgh313upivlh2th6ore" MODIFIED="1496384552656" TEXT="需要更改属组"><node CREATED="1496384552656" ID="1agvj95k7b4c1ipasi3if1t0rc" MODIFIED="1496384552656" TEXT="首先找到对应的用户"><node CREATED="1496384552656" ID="2lgjb1hk19guct90d44s9c4atk" MODIFIED="1496384552656" TEXT="nfsnobody"/></node><node CREATED="1496384552657" ID="0s9nnd427nmhsetr0okgrsr4q4" MODIFIED="1496384552657" TEXT="然后使用 chown 更改"><node CREATED="1496384552657" ID="5obmnpqakpdn84tpn0q9tpf559" MODIFIED="1496384552657" TEXT="chown -R nfsnobody /data"/></node></node></node></node><node CREATED="1496384552657" ID="18i0tt4rhoolhps35b103tthoe" MODIFIED="1496384552657" POSITION="left" TEXT="客户端"><node CREATED="1496384552657" ID="01o21thjnv9tdpoh6k1smckmhq" MODIFIED="1496384552657" TEXT="需要启 rpcbind 服务"/><node CREATED="1496384552657" ID="1s9v0tl8ak8kdpd0lupv0a3jpf" MODIFIED="1496384552657" TEXT="查看挂载  cat /proc/mounts"/></node><node CREATED="1496384552657" ID="1uvo4t5uorcovk577au7rdu06v" MODIFIED="1496384552657" POSITION="left" TEXT="排查错误"><node CREATED="1496384552657" ID="6u7jpmthhv8pv53o85bt05glvq" MODIFIED="1496384552657" TEXT="查看rpcbind 和 NFS是否建立链接"/><node CREATED="1496384552657" ID="7tqhoss74ln5njto1eh238f7ri" MODIFIED="1496384552657" TEXT="netstat -an|grep est"/><node CREATED="1496384552657" ID="18b8oo1u87gde263tqffagl5sh" MODIFIED="1496384552657" TEXT="服务器停止nfs服务,客户端还在挂载状态会宕掉 df- h"/></node><node CREATED="1496384552657" ID="4rojtqickjcaqvg7oc1k5ncp5a" MODIFIED="1496384552657" POSITION="left" TEXT="知识点&#9;"><node CREATED="1496384552657" ID="4djk1es77v0k9o8vkga0h78882" MODIFIED="1496384552657" TEXT="在 /etc/host 里面要做 ip 地址和 主机名的解析"/><node CREATED="1496384552657" ID="0i8n6uqhqpfm4otj1qqu7fik2t" MODIFIED="1496384552657" TEXT="强制卸载当文件系统繁忙的时候"><node CREATED="1496384552657" ID="1sf2p6nus8t1m91diuh5o6ebbv" MODIFIED="1496384552657" TEXT="umount -fl  文件系统挂载点"/></node><node CREATED="1496384552657" ID="2m9h8bhc2dd8jtofjojs9a878h" MODIFIED="1496384552657" TEXT="大型网站替代NFS的分布式软件"><node CREATED="1496384552657" ID="2pbsucgbihgc8fgopjqr7q7r17" MODIFIED="1496384552657" TEXT="Moosesfs (mfs)"/><node CREATED="1496384552657" ID="6me626rf6l1531k2mhjtncae3a" MODIFIED="1496384552657" TEXT="glusterfs"/><node CREATED="1496384552657" ID="6i8obvgcm2fopo78c68h8pamqb" MODIFIED="1496384552657" TEXT="FastDFS"/></node><node CREATED="1496384552657" ID="6snlpm5qnr1rel7nso73a6qsd9" MODIFIED="1496384552657" TEXT="了解 autofs"><node CREATED="1496384552657" ID="2rittujf97r7ptg03jsf3ps84m" MODIFIED="1496384552657" TEXT="自动挂载卸载 nfs 的管理器"/></node></node><node CREATED="1496384552657" ID="47ve1ltbc373te616ajh6lg5dg" MODIFIED="1496384552657" POSITION="left" TEXT="NFS 关键文件&amp;目录"><node CREATED="1496384552657" ID="11jhkchkkv3uqlmgr454ofkp4j" MODIFIED="1496384552657" TEXT="/etc/exports 共享文件夹配置文件"/><node CREATED="1496384552657" ID="3r2oulmfjdsfkefipmit8jjhrk" MODIFIED="1496384552657" TEXT="/usr/sbin/exportfs 加载配置生效"><node CREATED="1496384552657" ID="0fgtvg07npolvd5h9po7k3ljps" MODIFIED="1496384552657" TEXT="&lt;html&gt;&lt;img src=&quot;images/1veu1ruhlpvvhmfhevfmm1o31c.png&quot;&gt;"/></node><node CREATED="1496384552658" ID="6nf7v8ufcecsav61p7mktksoak" MODIFIED="1496384552658" TEXT="centos5 =&gt; /var/lib/nfs/xtab"><node CREATED="1496384552658" ID="3l8k6qm6rkm5fa1qmn2cgtfo8v" MODIFIED="1496384552658" TEXT="记录挂载过的NFS客户端的信息,包括 ip 地址"/></node><node CREATED="1496384552658" ID="6nu8pnra7ne12g769t0rinpp3g" MODIFIED="1496384552658" TEXT="/usr/sbin/showmount"><node CREATED="1496384552658" ID="5pleceg5kdmfqsn97kb273lf35" MODIFIED="1496384552658" TEXT="查看NFS配置及挂载结果的命令"/></node><node CREATED="1496384552658" ID="6a9alh9nh973f00r3ofe9pvoa7" MODIFIED="1496384552658" TEXT="/var/lib/nfs/etab"><node CREATED="1496384552658" ID="1mm5akfqpn0i9hj6asnaf88khf" MODIFIED="1496384552658" TEXT="NFS 配置文件的完整参数配置 (默认参数)"/></node><node CREATED="1496384552658" ID="7fnitlug0o68sglp0ubo84136q" MODIFIED="1496384552658" TEXT="/proc/mounts"><node CREATED="1496384552658" ID="78t0m880tl0qtevmdqtgf609ie" MODIFIED="1496384552658" TEXT="cat 查看整个挂载情况 在客户端查看NFS挂载参数"/></node></node><node CREATED="1496384552658" ID="3ulbjs3td0rgrmpvu2jfapjprs" MODIFIED="1496384552658" POSITION="left" TEXT="基础优化"><node CREATED="1496384552658" ID="5jqqftou9cl4mr3q79t67r0sad" MODIFIED="1496384552658" TEXT="安全挂载参数"><node CREATED="1496384552658" ID="0fjavmb5v2t2r7cvrleed50c7h" MODIFIED="1496384552658" TEXT="mount -t nfs -o nosuid,noexec,nodev,rw 172.31.15.27:/data /mnt"/></node><node CREATED="1496384552658" ID="5t6a3gqc6qqe18cd4lc2pennv1" MODIFIED="1496384552658" TEXT="性能参数"><node CREATED="1496384552658" ID="3ea2rm9d2j7ilj5533bn3uarri" MODIFIED="1496384552658" TEXT="mount -t nfs -o noatime,nodiratime 172.31.15.27:/data /mnt"/></node><node CREATED="1496384552658" ID="7ap0sajdj976l1p9o2r2b74gjs" MODIFIED="1496384552658" TEXT="默认挂载"><node CREATED="1496384552658" ID="5u6lguadhvkcf30ol4964lr8rh" MODIFIED="1496384552658" TEXT="mount -t nfs 172.31.15.27:/data /mnt"/></node><node CREATED="1496384552658" ID="0jio15vn0h6q07pmjirh602hhc" MODIFIED="1496384552658" TEXT="mount -t nfs -o noexec,nosuid,nodev,noatime,nodiratime,intr,rsize=8190,wsize=8190 172.31.15.27:/data /mnt"/></node><node CREATED="1496384552658" ID="7k970v2vsu702ahpe5dfotj8pc" MODIFIED="1496384552658" POSITION="left" TEXT="内核优化"><node CREATED="1496384552658" ID="10h4qkig0nfdu0odson4j81r5p" MODIFIED="1496384552658" TEXT="&lt;html&gt;&lt;img src=&quot;images/3k0b8gvqh8gastihrh1lb2i6qg.png&quot;&gt;"/></node></node></map>