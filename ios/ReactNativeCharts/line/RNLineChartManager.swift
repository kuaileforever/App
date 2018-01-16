//  Created by xudong wu on 23/02/2017.
//  Copyright wuxudong
//

import UIKit

(RNLineChartManager)
open class RNLineChartManager: RCTViewManager {
  override open func view() -> UIView! {
    let ins = RNLineChartView(coder: <#NSCoder#>)
    return ins;
  }
  
}
