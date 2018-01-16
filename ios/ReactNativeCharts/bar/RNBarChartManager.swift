//  Created by xudong wu on 23/02/2017.
//  Copyright wuxudong
//

import UIKit

(RNBarChartManager)
open class RNBarChartManager: RCTViewManager {
  override open func view() -> UIView! {
    let ins = RNBarChartView(coder: <#NSCoder#>)
    return ins;
  }
  
}
