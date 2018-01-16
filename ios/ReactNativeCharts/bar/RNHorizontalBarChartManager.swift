//  Created by xudong wu on 23/02/2017.
//  Copyright wuxudong
//

import UIKit

(RNHorizontalBarChartManager)
open class RNHorizontalBarChartManager: RCTViewManager {
  override open func view() -> UIView! {
    let ins = RNHorizontalBarChartView(coder: <#NSCoder#>)
    return ins;
  }
  
}
