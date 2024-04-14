import Swal from 'sweetalert2';

export function wrong() {
    Swal.fire({
        icon: 'error',
        title: '回答错误',
        html:
        '回答错误，不予下载。<br>' +
        '初中题目，实属不该。<br>' +
        '如欲下载，请看教程。<br>' +
        '或欲挑战，请君自便。',
    })
}

export function askQuestion(title, question, correctAnswer) {
    Swal.fire({
        title: title,
        html: question,
        input: 'text',
        confirmButtonText: '确认',
        showLoaderOnConfirm: true,
        preConfirm: (answer) => {
            if (answer == correctAnswer) {
                download();
            } else {
                wrong();
            }
        }
    });
}

export function lazyDownload() {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    setTimeout(function() {
        if (randomNumber == 1) {
            Swal.fire({
                title: '数学题',
                text: '2023北京中考数学8',
                input: 'text',
                confirmButtonText: '确认',
                showLoaderOnConfirm: true,
                imageUrl: 'https://s1.ax1x.com/2023/07/22/pCbzf5q.jpg',
                preConfirm: (answer) => {
                    if (answer == 'D') {
                        download();
                    } else {
                        wrong();
                    }
                }
            });
        } else if (randomNumber == 2) {
            askQuestion('道德与法治题', '2022年10月30日，第十三届全国人民代表大会常务委员会通过《中华人民共和国黄河保护法》，旨在通过立法加强黄河流域生态环境保护，保障黄河安澜，推进水资源节约利用，推动高质量发展。为了更好地落实该法，以下说法正确的是<br><br>' +
                'A. 人大要组织力量加强对各地黄河生态保护的执法检查监督<br>' +
                'B. 行政机关要积极履行监察职责，对黄河生态问题进行调查<br>' +
                'C. 人民检察院公开审理污染黄河流域的案件，维护社会利益<br>' +
                'D. 人民法院对污染黄河的行为提起公诉，保障法律正确实施<br>' +
                '（2023北京顺义政治一模9）', 'A');
        } else if (randomNumber == 3) {
            askQuestion('物理题', '小瑶同学在一次实验中将定值电阻R两端的电压从2V增加到3V，她观察到和R串联的电流表的示数变化了0.1A。下列判断正确的是<br><br>' +
                'A. 电阻R的阻值为20Ω<br>' +
                'B. 电阻R的阻值从20Ω变为30Ω<br>' +
                'C. 电阻R消耗的电功率增加了0.5W<br>' +
                'D. 电阻R消耗的电功率从0.2W变为0.3W<br>' +
                '（2023北京通州物理一模11 区得分率50.71%）', 'C');
        } else if (randomNumber == 4) {
            Swal.fire({
                title: '英语作文题',
                html:
                '某英文网站正在开展以“挑战”为主题的征文活动。假定你是李华，请用英语写一篇短文投稿，谈谈你在生活中是怎样应对挑战的，有哪些收获。<br>' +
                '提示词语：overcome,practice,effort,make progress<br>' +
                '提示问题：<li>How do you face challenges in your life?</li><br>' +
                '<li>What have you achieved?</li><br>' +
                '注意：请发送邮件给捂脸（1055917385@qq.com），收到后会人工给你的作文打分，并且回复你汉化下载链接。<a href="mailto:1055917385@qq.com?subject=某某某整合包英语作文题&body=It is important for us to face challenges in our lives.">点我发邮件</a><br>'+
                '（2023北京大兴英语二模题目②）<br>'+
                '<em>It is important for us to face challenges in our lives.</em>',
                confirmButtonText: '确认',
                showLoaderOnConfirm: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "mailto:1055917385@qq.com?subject=英语作文题";
                }
            });
        } else if (randomNumber == 5) {
            Swal.fire({
                title: '语文题',
                html: '2023北京中考语文2、3。<br>请用连续不加空格的大写字母作答，比如AB。',
                input: 'text',
                confirmButtonText: '确认',
                showLoaderOnConfirm: true,
                imageUrl: 'https://s1.ax1x.com/2023/07/22/pCqStzT.png',
                preConfirm: (answer) => {
                    if (answer == 'DB') {
                        download();
                    } else {
                        wrong();
                    }
                }
            });
        } else if (randomNumber == 6) {
            askQuestion('化学题', '向分别盛有下列物质的点滴版孔穴中滴加足量稀硫酸，无明显现象的是<br><br>' +
                'A. Fe₂O₃<br>' +
                'B. Fe<br>' +
                'C. 稀 NaOH 溶液<br>' +
                'D. Na₂CO₃ 溶液<br>' +
                '（2023北京中考化学17）', 'C');
        }else if (randomNumber == 7) {
            askQuestion('历史题', '随着西方列强的侵华，中国人民为救亡图存进行了不懈地抗争和探索。下列相关表述逻辑关系不正确的是<br><br>' +
                'A. 英国为了打开中国市场→鸦片战争→《南京条约》→太平天国运动<br>' +
                'B. 英法为了镇压太平天国运动→第二次鸦片战争→《辛丑条约》→新文化运动<br>' +
                'C. 日本为了征服朝鲜、侵略中国、称霸世界→甲午中日战争→《马关条约》→公车上书<br>' +
                'D. 帝国主义列强为了镇压义和团运动→八国联军侵华战争→《辛丑条约》→辛亥革命<br>' , 'B');
        }else if (randomNumber == 8) {
            askQuestion('生物题', '世界上唯一一株完全野生的普陀鹅耳枥生长在浙江省普陀山上。科学家历经半个世纪成功培育了 108 粒种子，之后又成功地用枝条进行扦插繁殖，大大降低了普陀鹅耳枥灭绝的风险。关于其繁殖的叙述，正确的是<br><br>' +
                'A. 只能进行无性生殖<br>' +
                'B. 种子繁殖属于无性生殖<br>' +
                'C. 扦插繁殖于有性生殖<br>' +
                'D. 可以进行有性生殖<br>' +
                '2023陕西中考生物', 'D');
        }else if (randomNumber == 9) {
            askQuestion('地理题', '小丽在终南山景区内看到一则标语“人杰地灵名胜迹，和合南北贯东西”，联想到地理课堂上学习的“秦岭一淮河”一线的地理意义是<br><br>' +
                'A. 干旱区与半干旱区的分界线<br>' +
                'B. 农耕区与畜牧区的分界线<br>' +
                'C. 季风区与非季风区的分界线<br>' +
                'D. 暖温带与亚热带的分界线<br>' +
                '2023陕西中考地理', 'D');
        }else if (randomNumber == 10) {
                Swal.fire({
                title: '历史物理题',
                html: '漂附在液体中的物体,在自身重力不变的情况下，外来的压力加重力小于浮力时，就会上浮，反之则会下沉。下面与图二的外力有关的史实是<br><br>',
                input: 'text',
                confirmButtonText: '确认',
                showLoaderOnConfirm: true,
                imageUrl: 'https://s21.ax1x.com/2024/03/31/pFTxnD1.jpg',
                preConfirm: (answer) => {
                    if (answer == 'A') {
                        download();
                    } else {
                        wrong();
                    }
                }
            });
          }
       },
 400);
}

export function exeInstall() {
    setTimeout(function() {
        Swal.fire({
            title: '安装教程',
            text: '我们很高兴向您推出exe安装程序版的汉化补丁从而简化汉化安装步骤。请双击打开稍后下载完成的exe程序，进入后选择您的整合包路径，根据指引点击下一步即可完成汉化安装。',
            cancelButtonText: '没看教程，继续看（点击取消）',
            confirmButtonText: '下载汉化',
            showCancelButton: true,
            showConfirmButton: false,
            didOpen: () => {
                setTimeout(() => {
                    cancelButtonText: '不下载了',
                    Swal.update({
                        showConfirmButton: true
                    });
                }, 4000);
            }
        }).then((result) => {
            if (result.isConfirmed) {
                download();
            }
        });
    },
    400);
}


export function zipInstall() {
    setTimeout(function() {
        Swal.fire({
            title: '安装教程',
            text: '首先，要先下载汉化，现在你正在看安装教程，待会儿就可以下载了。然后找到安装整合包的文件夹，你可以在启动器内点击相应的按钮自动弹出游戏目录（窗口内包含config、mods等文件夹的就是）。然后右键刚才下载的汉化zip压缩包，点击解压到当前文件夹。如果出现合并文件夹/替换文件的提示，说明你操作对了，没出现就是你有一步没做对。然后一律点击“是/确认”。安装完成。',
            imageUrl: 'https://s1.ax1x.com/2023/06/04/pC9UN1s.jpg',
            cancelButtonText: '没看教程，继续看（点击就不看了）',
            confirmButtonText: '下载汉化',
            showCancelButton: true,
            showConfirmButton: false,
            didOpen: () => {
                setTimeout(() => {
                    cancelButtonText: '不下载了',
                    Swal.update({
                        showConfirmButton: true
                    });
                }, 5000);
            }
        }).then((result) => {
            if (result.isConfirmed) {
                download();
            }
        });
    },
    400);
}