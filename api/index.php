<?php
    $_AFDIAN = [
        'pageTitle' => '为汉化组发电',
        'userName'  => 'VMhanhuazu',
        'userId'    => '4938bb3487ec11ebb3a152540025c377',
        'token'     => 'NnYJW7wEpKUrAdaTPxQXC85sFbBStcDM'
    ];
    $currentPage = $_POST['page'] ?? 1;

    $data = [];
    $data['user_id'] = $_AFDIAN['userId'];
    $data['params']  = json_encode(['page' => $currentPage], JSON_THROW_ON_ERROR);
    $data['ts']      = time();
    $data['sign']    = SignAfdian($_AFDIAN['token'], $data['params'], $_AFDIAN['userId']);

    $result = HttpGet('https://afdian.com/api/open/query-sponsor?' . http_build_query($data));
    $result = json_decode($result, true, 512, JSON_THROW_ON_ERROR);

    $donator = [
        'total'     => $result['data']['total_count'],
        'totalPage' => $result['data']['total_page'],
        'list'      => $result['data']['list']
    ];

    $donatorsHTML = '';
    foreach ($donator['list'] as $_donator) {
        $_donator['last_sponsor'] = empty(end($_donator['sponsor_plans'])['name']) ?
            ($_donator['current_plan']['name'] ?? ['name' => '']) :
            end($_donator['sponsor_plans']);

        $donatorsHTML .= '<div class="mdui-col-xs-12 mdui-col-md-6 mdui-m-b-2">
            <div class="mdui-card">
                <div class="mdui-card-header">
                    <img class="mdui-card-header-avatar" src="' . $_donator['user']['avatar'] . '" />
                    <div class="mdui-card-header-title">' . $_donator['user']['name'] .
                    '&nbsp;&nbsp;&nbsp;&nbsp;共' . $_donator['all_sum_amount'] . '元' . '</div>
                    <div class="mdui-card-header-subtitle">最后发电：' .
                    (empty($_donator['last_sponsor']['name']) ?
                        '暂无' :
                        $_donator['last_sponsor']['name'] . '&nbsp;&nbsp;' . $_donator['last_sponsor']['show_price'] . '元，于 ' . date('Y-m-d H:i:s', $_donator['last_pay_time'])) .
                    '</div>
                </div>' .
                (!empty($_donator['last_sponsor']['pic']) ? '
                    <div class="mdui-card-media">
                        <img src="' . $_donator['last_sponsor']['pic'] . '"/>
                    </div>' :
                    '') .
            '</div></div>';
    }

    $pageControlHTML = '<div class="mdui-row">
        <button onclick="switchPage(' . ($currentPage - 1) . ')" class="mdui-btn mdui-btm-raised mdui-ripple mdui-color-theme-accent mdui-float-left"' . ($currentPage == 1 ? ' disabled' : '') . '>
            <i class="mdui-icon material-icons">keyboard_arrow_left</i>
            上一页
        </button>
        <div class="mdui-btn-group -center">';
    for ($i = 0; $i < $donator['totalPage']; $i++) {
        $pageControlHTML .= '<button onclick="switchPage(' . ($i + 1) . ')" class="mdui-btn ' .
        ($i + 1 == $currentPage ? 'mdui-btn-active mdui-color-theme-accent' : 'mdui-text-color-theme-text') .
        '">' . ($i + 1) . '</button>';
    }
    $pageControlHTML .= '</div>
        <button onclick="switchPage(' . ($currentPage + 1) . ')" class="mdui-btn mdui-btm-raised mdui-ripple mdui-color-theme-accent mdui-float-right"' . ($donator['totalPage'] == 1 ? ' disabled' : '') . '>
            下一页
            <i class="mdui-icon material-icons">keyboard_arrow_right</i>
        </button>
    </div>';

    if (empty($_POST)) {
$html = <<< HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf8" />
        <meta name="viewport" content="width=device-width" />
        <link
  rel="stylesheet"
  href="https://cdn.jsdmirror.com/npm/mdui@2.1.4/mdui.min.css"
  crossorigin="anonymous"
/>
        <style>html, body {
    scroll-behavior: smooth;
}
.-center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
#afdian_leaflet {
    width: 640px !important;
    height: 220px !important;
}
@media screen and (max-width:600px) {
    #afdian_leaflet {
        width: 100% !important;
    }
}</style>
        <script>
        function switchPage (pageId) {
    mdui.$.ajax({
        method: 'POST',
        url: 'index.php',
        data: {
            page: pageId
        },
        start: function () {
            mdui.$('#mdui_progress').removeClass('mdui-hidden');
            mdui.$.showOverlay();
            mdui.$.lockScreen();
        },
        complete: function () {
            mdui.$('#mdui_progress').addClass('mdui-hidden');
            mdui.$.hideOverlay();
            mdui.$.unlockScreen();
        },
        success: function (data) {
            let _json = undefined;

            try {
                _json = JSON.parse(data);
            } catch (e) {
                mdui.alert('拉取信息时出错', '出错啦！');
                return;
            }

            if (_json.code == 200) {
                if (_json.html != '') {
                    mdui.$('#afdian_sponsors').html(_json.html);
                    window.scroll(0, 348);
                } else {
                    mdui.alert('没有更多了', '提示');
                    return;
                }

            } else {
                mdui.alert(_json.msg, '出错啦！');
                return;
            }
        },
        error: function () {
            mdui.alert('拉取信息时出错', '出错啦！');
            return;
        }
    });
}</script>
        <title>{$_AFDIAN['pageTitle']}</title>
    </head>
    <body class="mdui-appbar-with-toolbar mdui-theme-primary-blue-grey mdui-theme-accent-red mdui-theme-layout-auto">
        <header class="mdui-appbar mdui-appbar-fixed">
            <div class="mdui-progress mdui-hidden" style="position:absolute;top:0;width:100%" id="mdui_progress">
                <div class="mdui-progress-indeterminate" style="background-color:white"></div>
            </div>
            <div class="mdui-toolbar mdui-color-theme">
                <a href="javascript:;" class="mdui-typo-headline">{$_AFDIAN['pageTitle']}</a>
            </div>
        </header>

        <main class="mdui-container mdui-typo">
            <h1 class="mdui-text-center">支持汉化组，为我们发电</h1>
            <iframe id="afdian_leaflet" class="mdui-center" src="https://afdian.com/leaflet?slug={$_AFDIAN['userName']}" scrolling="no" frameborder="0"></iframe>
            <div class="mdui-divider mdui-m-t-5"></div>
            <h2 class="mdui-text-center">感谢以下小伙伴的发电支持！</h2>

            <div class="mdui-m-b-2" id="afdian_sponsors">
                <div class="mdui-row">
                    {$donatorsHTML}
                </div>
                {$pageControlHTML}
            </div>
        </main>

        <script src="https://cdn.jsdmirror.com/npm/mdui@2.1.4/mdui.global.min.js"></script>
    </body>
</html>
HTML;

        echo $html;
    } else {
        $return = [
            'code' => $result['ec'],
            'msg'  => $result['em'],
            'html' => !empty($donatorsHTML) ? '<div class="mdui-row">' . $donatorsHTML . "</div>" . $pageControlHTML : ''
        ];

        echo json_encode($return, JSON_THROW_ON_ERROR);
    }

    function SignAfdian(string $token, string $params, string $userId): string {
        $ts = time();
        $sign = $token . 'params' . $params . 'ts' . $ts . 'user_id' . $userId;
        return md5($sign, false);
    }

    function HttpGet(string $url, string $method = 'GET', string $data = '', string|array $contentType = '', int $timeout = 10): string {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
        if ($method === 'POST') {
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_POST, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        } else {
            curl_setopt($ch, CURLOPT_URL, $url);
        }
        if (!empty($contentType)) {
            curl_setopt($ch, CURLOPT_HTTPHEADER, is_array($contentType) ? $contentType : [$contentType]);
        }
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $output = curl_exec($ch);
        curl_close($ch);
        return $output ?: '';
    }
?>
