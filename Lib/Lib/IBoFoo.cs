﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StackFoo.Security;
namespace StackFoo {
    public interface IBoFoo {
        IUser LastUpdatedBy { get; }
    }
}
