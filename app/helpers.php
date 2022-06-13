<?php declare(strict_types=1);


if (!function_exists('ddfa')) {
  /**
   * dump & die for api
   *
   * @param mixed ...$vars
   */
  function ddfa(...$vars)
  {
      foreach ($vars as $v) {
        echo (is_object($v) ? json_encode($v, JSON_FORCE_OBJECT | JSON_UNESCAPED_UNICODE) : var_export($v)) . PHP_EOL;
      }
      die(1);
  }
}
